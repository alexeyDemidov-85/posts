import PostsAPI from '@/api/posts.api.js'

const state = {
    posts: [],
    totalPosts: 0,
}
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
    SET_TOTAL_POSTS_COUNT(state, count) {
        state.totalPosts = count
    },
}
const actions = {
    getAllPosts({ commit }) {
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
    getPostsOnPage({ commit }, params) {
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
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}
