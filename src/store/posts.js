import PostsAPI from '@/api/posts.api.js'

const state = {
    posts: [],
    post: null,
    totalPosts: 0,
}
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_TOTAL_POSTS_COUNT(state, count) {
        state.totalPosts = count
    },
    SET_CURRENT_POST(state, post) {
        state.post = post
    },
    DELETE_POST(state) {
        state.post = null
    },
}
const actions = {
    fetchAllPosts({ commit }) {
        return PostsAPI.getAllPosts()
            .then(({ data: posts, headers = {} }) => {
                commit('SET_POSTS', posts)

                if (['x-total-count'] in headers) {
                    commit(
                        'SET_TOTAL_POSTS_COUNT',
                        parseInt(headers['x-total-count'])
                    )
                }
            })
            .catch((error) => {
                throw error
            })
    },
    fetchPostsOnPage({ commit }, params) {
        return PostsAPI.getPostsOnPage(params)
            .then(({ data: posts, headers = {} }) => {
                commit('SET_POSTS', posts)

                if (['x-total-count'] in headers) {
                    commit(
                        'SET_TOTAL_POSTS_COUNT',
                        parseInt(headers['x-total-count'])
                    )
                }
            })
            .catch((error) => {
                throw error
            })
    },
    fetchPostById({ getters, commit }, id) {
        commit('DELETE_POST')
        const postFromState = getters.getPostById(id)

        if (postFromState) {
            commit('SET_CURRENT_POST', postFromState)
        } else {
            return PostsAPI.getPostById(id)
                .then(({ data: post }) => {
                    commit('SET_CURRENT_POST', post)
                })
                .catch((error) => {
                    throw error
                })
        }
    },
}
const getters = {
    getPostById: (state) => (id) => state.posts.find((post) => post.id === id),
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}
