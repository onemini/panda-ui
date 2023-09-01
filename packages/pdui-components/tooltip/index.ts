import Tooltip from './src/tooltip.vue'
import { withInstall } from '../_utils/withInstall'

const PdTooltip = withInstall(Tooltip)

export default PdTooltip

export type { PdTooltipInstance } from './src/tooltip'
