import { computed, defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'pd-modal',
  props,
  setup(props, { slots, emit }) {
    console.log(props, 'props')
    const onClickMask = (e: Event): void => {
      e.preventDefault()
      emit('click-mask')
    }
    const onClickWrap = (e: Event): void => {
      // e.preventDefault()
      e.stopPropagation()
    }
    const computedCls = computed(() => {
      return [
        'pd-modal',
        {
          'pd-modal--show': props.visible,
        },
      ]
    })
    const onCancle = () => {
      emit('click-mask')
    }
    return () => {
      const Content = (
        // <Transition name="slide-top">
        <div class="pd-modal--root" v-show={props.visible} onClick={onClickMask}>
          {/* <div class="pd-modal--mask" onClick={onClickMask}></div> */}
          <div class="pd-modal--wrap">
            <div class={computedCls.value} onClick={onClickWrap}>
              <div class="pd-modal--header">
                <span>这是标题</span>
                <pd-icon name="close" onClick={onCancle}></pd-icon>
              </div>
              <div class="pd-modal--body">{slots.default?.()}</div>
              <div class="pd-modal--footer">
                <pd-button onClick={onCancle}>取 消</pd-button>
                <pd-button type="primary" style={{ marginLeft: '12px' }}>
                  确 定
                </pd-button>
              </div>
            </div>
          </div>
        </div>
        // </Transition>
      )
      // return props.visible ? Content : null
      return Content
    }
  },
})
