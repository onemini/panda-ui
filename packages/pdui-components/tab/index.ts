// import Tab from './src/tab'
// export default Tab
import Tab from './src/tab'
import TabItem from './src/tab-item.vue'
import { withInstall } from '../_utils/withInstall'

const PdTab = withInstall(Tab)
const PdTabItem = withInstall(TabItem)

export default PdTab
export { PdTabItem }
// export type { ButtonInstance, ButtonType } from './src/tab'
