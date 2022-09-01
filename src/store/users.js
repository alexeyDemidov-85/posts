import UsersAPI from '@/api/users.api.js'

const state = {
    users: [],
}
const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
}
const actions = {
    fetchAllUsers({ commit }) {
        return UsersAPI.getAllUsers()
            .then(({ data: users }) => {
                commit('SET_USERS', users)
            })
            .catch((error) => {
                throw error
            })
    },
}
const getters = {
    dictionaryUsersById: (state) => {
        return state.users.reduce((acc, user) => {
            acc[user.id] = user
            return acc
        }, {})
    },
    dictionaryUsersByName: (state) => {
        return state.users.reduce((acc, user) => {
            acc[user.name] = user.id
            return acc
        }, {})
    },
    authorsName: (state) => {
        return state.users.map((user) => user.name)
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}
