import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from '@/constants/i18n'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
