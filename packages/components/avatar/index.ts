import Avatar from './src/avatar'
import { withInstall } from '../_utils/withInstall'

const PdAvatar = withInstall(Avatar)

export default PdAvatar

export type { AvatarInstance, AvatarProps } from './src/prop'
