const store = {
    namespaced: true,
    state: {
        device: {},
        app:{}
    },
    mutations: {
        updateDevice(state, data) {
            state.device = data;
        },
        updateApp(state,data){
            state[data.key] = data.value
        }
    }
}
export default store;
