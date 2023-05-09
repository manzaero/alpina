import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'
import "material-design-icons-iconfont"

createApp(App).use(store).use(router).mount('#app')
