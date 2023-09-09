import { computed, defineComponent, ref, Transition } from 'vue'
import { props } from './prop'

// import { useCssVar, calcColor } from '../../_utils/useCssVar'

export default defineComponent({
  name: 'pd-tag',
  props,
  setup(props, { slots }) {
    const visible = ref<boolean>(true)
    const computedCls = computed(() => {
      return [
        'pd-tag',
        `pd-tag--${props.type}`,
        {
          'pd-tag--double': props.doubleColor,
          'pd-tag--pdun': props.pdun,
        },
      ]
    })
    const onRemoveTag = () => {
      visible.value = false
    }
    return () => {
      const Content = props.doubleColor ? (
        <div class={computedCls.value}>
          <div class="pd-tag--inner">
            <span class="pd-tag--inner__left">{slots?.left()}</span>
            <span class="pd-tag--inner__right">{slots?.right()}</span>
          </div>
        </div>
      ) : (
        <Transition name="tag-fade">
          <div class={computedCls.value} v-show={visible.value}>
            {slots?.default && <div class="pd-tag--inner">{slots?.default()}</div>}
            {props.closeable && (
              <span class="pd-tag--close" onClick={onRemoveTag}>
                <pd-icon size={12} name="xmark"></pd-icon>
              </span>
            )}
          </div>
        </Transition>
      )
      return Content
    }
  },
})
