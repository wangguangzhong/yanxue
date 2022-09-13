const store = {
    namespaced: true,
    state: {
        userinfo: {},
    },
    mutations: {
        updateUserinfo(state, data) {
            state.userinfo = data;
        },
    }
}
export default store;
