export default {
    namespaced: true, // true 私有独立模块， false为全局命名非模块化
    // 初始化值
    state: {
        is_login: false,
        is_open_login: false,
    },
    getters: {},
    mutations: {
        changelogin(state, bl) {
            state.is_login = bl
            state.is_open_login = false
        },
        changeOpenModal(state, bl) {
            state.is_open_login = bl
        }
    },
    actions: {
        changeloginAction(context,value) {
            console.error('changeloginAction', value);
            context.commit('changelogin', value)
        },
        changeModalAction(context,value) {
            console.error('changeOpenModal', value);
            context.commit('changeOpenModal', value)
        }
    }
}
