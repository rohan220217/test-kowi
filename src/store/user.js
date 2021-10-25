const state = {
    isKowiDark: localStorage.getItem('isKowiDark') ? localStorage.getItem('isKowiDark') : 'light',

}
const getters = {
    getIsDark(state) {
        return state.isKowiDark
    },

}


const mutations = {


    DELETE_DATA: (state) => {
        state.userToken = ''
        localStorage.clear();
    },
    TOGGLE_DARK_MODE: (state) => {
        localStorage.removeItem('isKowiDark')
        if (state.isKowiDark == 'light') {
            state.isKowiDark = 'dark'
        } else {
            state.isKowiDark = 'light'
        }
        localStorage.setItem('isKowiDark', state.isKowiDark)
            // state.isKowiDark = data
            // console.log(data)
            // localStorage.setItem('isKowiDark', data)
    },


}

const actions = {
    toggleDark({ commit }, data) {
        commit('TOGGLE_DARK_MODE')
    },

}

export default {
    state,
    getters,
    mutations,
    actions
}