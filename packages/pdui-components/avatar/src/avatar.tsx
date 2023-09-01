import { computed, defineComponent } from 'vue'
import { props } from './prop'

export default defineComponent({
  name: 'pd-avatar',
  props,
  // emits: ['click'],
  // slots, attrs
  setup(props) {
    const computedCls = computed(() => {
      return [
        'pd-avatar',
        `pd-avatar--${props.size}`,
        {
          'pd-avatar__square': props.square,
        },
      ]
    })
    return () => {
      const Content = (
        <div class={computedCls.value}>
          <img class="pd-avatar--img" src={props.url} alt="" />
        </div>
      )
      return Content
    }
  },
})
