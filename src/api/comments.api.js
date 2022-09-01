import httpClient from './httpClient'

const END_POINT = '/comments'

const getCommentsOnPost = (postId) => {
    return httpClient.get(`${END_POINT}`, {
        params: {
            postId,
        },
    })
}

export default {
    getCommentsOnPost,
}
