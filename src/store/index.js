import login from "./modules/login.js"
import useFooter from "./modules/footer.js"
import { createStore } from "vuex"

const store = createStore({
    modules: {
        login,
        useFooter
    }
})
export default store