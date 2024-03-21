import login from "./modules/login.js"
import { createStore } from "vuex"

const store = createStore({
    modules: {
        login
    }
})
export default store