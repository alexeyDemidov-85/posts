import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponents from '@/components/ui'
import 'nprogress/nprogress.css'

const app = createApp(App).use(store).use(router)

globalComponents(app)
app.mount('#app')
