import { getToken } from '@/utils/auth';

const state = {
  token: getToken()
}

const mutations = {
    SET_TOKEN: function (state, token) {
        state.token = token
    }
}

const actions = {
    login: function ({commit}, userInfo) {
        console.log(userInfo);
        commit('SET_TOKEN')
    }
}


export default {
    namespace: true,
    state,
    mutations,
    actions
}