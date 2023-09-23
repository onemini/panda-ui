import { ExtractPropTypes } from 'vue'
export const Type = [ 'success', 'warning', 'error']
/**
 * 接收传过来的值
 * @param type 定义按钮的类型 可选值为 'primary' | 'success' | 'info' | 'warning' | 'danger'
 * @param size 定义按钮的大小 默认middle 可选值为 'large' | 'middle' | 'small' | 'mini'
*/
export const PdNotifyProps = {
      type: {
    type: String,
    validator(value: string) {
      return Type.includes(value)
        },
    default: 'success'
  },
  title: {
        type: String,
          default: 'Tips'
    },
    width: {
        type: String,
          default: '330px'
    },
    notifyVisible: {
        type: Boolean,
        default:false
    },
    position: {
        type: String,
        default: 'top-right'
    }
}

export type PdNotifyProps = ExtractPropTypes<typeof PdNotifyProps>
