export default {
    namespaced: true, // true 私有独立模块， false为全局命名非模块化
    // 初始化值
    state: {
        active_tab: '/',
    },
    getters: {},
    mutations: {
        changetab(state, bl) {
            state.active_tab = bl
        }
    },
    actions: {
        changetabAction(context,value) {
            context.commit('changetab', value)
        }
    }
}
