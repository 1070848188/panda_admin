import { getToken, setToken } from '@/utils/auth';

const state = {
  token: getToken()
}

const mutations = {
    SET_TOKEN: function (state, token) {
        state.token = token
        setToken(token)
    }
}

const actions = {
    login: function ({commit}, userInfo) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('SET_TOKEN', userInfo)
                resolve()
            }, 1000);
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}