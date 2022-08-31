import UsersAPI from '@/api/users.api.js'

const state = {
    users: [],
}
const mutations = {}
const actions = {
    fetchAllUsers() {
        return UsersAPI.getAllUsers()
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
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
