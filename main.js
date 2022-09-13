import App from './App'

import uView from "uview-ui";
import store from '@/store/index.js'
import * as utils from '@/utils/index.js'
Vue.use(uView);

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$utils = utils
App.mpType = 'app'
const app = new Vue({
    store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}

// #endif
