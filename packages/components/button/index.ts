import Button from './src/button.vue'
import { withInstall } from '../_utils/withInstall'

const PdButton = withInstall(Button)

export default PdButton

export type { ButtonInstance, ButtonType } from './src/button'
