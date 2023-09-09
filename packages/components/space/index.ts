import Space from './src/space'
import { withInstall } from '../_utils/withInstall'

const PdSpace = withInstall(Space)

export default PdSpace

export type { SpaceInstance, SpaceProps } from './src/prop'
