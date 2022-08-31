import httpClient from './httpClient'

const END_POINT = '/users'

const getAllUsers = () => {
    return httpClient.get(END_POINT)
}

export default {
    getAllUsers,
}
