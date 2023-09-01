import Checkbox from './src/checkbox.vue'
import { withInstall } from '../_utils/withInstall'

const PdCheckbox = withInstall(Checkbox)

export default PdCheckbox

export type { CheckboxInstance, CheckboxProps } from './src/checkbox'
