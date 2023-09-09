import Backtop from './src/backtop'
import { withInstall } from '../_utils/withInstall'

const PdBacktop = withInstall(Backtop)

export default PdBacktop

export type { BacktopInstance, BacktopProps } from './src/prop'
