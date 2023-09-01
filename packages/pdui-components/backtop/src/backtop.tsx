import { computed, defineComponent, onMounted, ref } from 'vue'
import PdIcon from '../../icon'
import { props } from './prop'

export default defineComponent({
  components: {
    PdIcon,
  },
  name: 'pd-backtop',
  props,
  emits: ['click'],
  // slots, attrs
  setup(props, { emit }) {
    const show = ref(false)
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    const onScroll = () => {
      const st = document.documentElement.scrollTop
      show.value = st > 400 ? true : false
    }
    onMounted(() => {
      // console.log(document.querySelectorAll('.ik-backop'))
      window.addEventListener('scroll', onScroll)
    })
    // watch(show, () => {
    //   console.log(show.value, 'show')
    // })
    const computedCls = computed(() => {
      return [
        'pd-backtop',
        {
          'show-backtop': show.value,
          'pd-backtop__shape': props.shape,
        },
      ]
    })
    const computedStyle = computed(() => {
      return {
        bottom: `${props.bottom || 120}px`,
        right: `${props.right}px`,
      }
    })
    return () => {
      const Content = (
        <div class={computedCls.value} onClick={handleClick} style={computedStyle.value}>
          <pd-icon name={props.icon} />
        </div>
      )
      return show.value ? Content : null
    }
  },
})
