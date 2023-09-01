import Card from './src/card.vue'
import { withInstall } from '../_utils/withInstall'

const PdCard = withInstall(Card)

export default PdCard

export type { CardInstance, CardProps } from './src/card'
