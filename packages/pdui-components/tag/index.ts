import Tag from './src/tag'
import { withInstall } from '../_utils/withInstall'

const PdTag = withInstall(Tag)

export default PdTag

export type { TagInstance } from './src/prop'
