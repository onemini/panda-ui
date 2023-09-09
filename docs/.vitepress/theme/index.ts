import DefaultTheme from 'vitepress/theme'
import PdUI, { message } from '@panda-ui/components'
import '@panda-ui/theme-chalk/index.scss'
// import Demo from '../components/demo.vue'
// import DemoBlock from '../components/demoBlock.vue'
import './var.css'
import './style.css'
// console.log(IkUI, message, 'IkUI')
import Demo from '../vitepress-theme-demoblock/client/components/Demo.vue'
import DemoBlock from '../vitepress-theme-demoblock/client/components/DemoBlock.vue'
import '../vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PdUI)
    app.config.globalProperties.$message = message
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
