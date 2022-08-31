import httpClient from './httpClient'

const END_POINT = '/posts'

const getAllPosts = () => {
    return httpClient.get(END_POINT)
}
const getPostsOnPage = (params = {}) => {
    return httpClient.get(END_POINT, params)
}

export default {
    getAllPosts,
    getPostsOnPage,
}
