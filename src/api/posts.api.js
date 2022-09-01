import httpClient from './httpClient'

const END_POINT = '/posts'

const getAllPosts = () => {
    return httpClient.get(END_POINT)
}
const getPostsOnPage = (params = {}) => {
    return httpClient.get(END_POINT, {
        params,
        paramsSerializer(params) {
            return Object.entries(params)
                .map(([key, value]) => {
                    return `${key}=${value}`
                })
                .join('&')
        },
    })
}
const getPostById = (id) => {
    return httpClient.get(`${END_POINT}/${id}`)
}
const getPostByAuthorName = (name) => {
    return httpClient.get(END_POINT, {
        params: {
            'author.name': name,
        },
        paramsSerializer(params) {
            return Object.entries(params)
                .map(([key, value]) => {
                    return `${key}=${value}`
                })
                .join('&')
        },
    })
}

export default {
    getAllPosts,
    getPostsOnPage,
    getPostById,
    getPostByAuthorName,
}
