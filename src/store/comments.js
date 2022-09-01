import CommentsAPI from '@/api/comments.api.js'

const state = {
    commentsOnPost: [],
}
const mutations = {
    SET_COMMENTS_ON_POST(state, comments) {
        state.commentsOnPost = comments
    },
}
const actions = {
    fetchCommentOnPost({ commit }, id) {
        return CommentsAPI.getCommentsOnPost(id)
            .then(({ data: comments }) => {
                commit('SET_COMMENTS_ON_POST', comments)
            })
            .catch((error) => {
                throw error
            })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}
