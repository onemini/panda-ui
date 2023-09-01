import { createApp } from 'vue'
import app from './layout.vue'
import PdUI from 'pandaui'
import '@pdui/theme/index.scss'
import router from './router'

document.title = 'pdui-dev'

createApp(app).use(PdUI).use(router).mount('#app')

// import { createApp } from 'vue'
// import app from './online-pkg.vue'
// import IkUI, { IkButton } from 'ikuiv'
// console.log(IkButton, 'IkButton')

// createApp(app)
//   .use(IkUI)
//   .mount('#app')
