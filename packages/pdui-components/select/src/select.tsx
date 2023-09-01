import { defineComponent, ref, watch, Transition, onMounted, computed } from 'vue'
import { selectProps as props, selectEmits as emits } from './props'
// import { useClickOutside } from '../../_utils/useClickOutside'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'pd-select',
  props,
  emits,
  setup(props, { emit }) {
    const selectValue = ref(props.modelValue)
    const filteredOptions = ref([])
    const selectOptionVisible = ref<boolean>(false)
    const selectOptionsRef = ref<HTMLElement>(null)

    const selectIsFocus = ref<boolean>(false)

    onMounted(() => {
      onClickOutside(selectOptionsRef.value, (event) => {
        const classList = (event.target as HTMLElement).classList
        if (
          !classList?.contains('pd-select__input') &&
          !classList.contains('pd-icon') &&
          !classList.contains('pd-select__inner')
        ) {
          selectOptionVisible.value = false
        }
      })
    })
    const onClickSelectItem = (item) => {
      // if (selectValue.value === item) return
      emit('update:modelValue', item)
      selectValue.value = item
      selectOptionVisible.value = false
    }
    const onClickSelct = () => {
      selectOptionVisible.value = true
    }
    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    )
    watch(
      () => selectOptionVisible.value,
      (val) => {
        selectIsFocus.value = val
      }
    )
    const onInput = (e) => {
      if (typeof e.target.value === 'string' && e.target.value) {
        const ls = props.option.filter((item: string) => {
          return item.includes(e.target.value)
        })
        filteredOptions.value = ls || []
      } else {
        filteredOptions.value = props.option
      }
    }
    const onFocus = () => {
      selectIsFocus.value = true
    }
    const onBlur = () => {
      selectIsFocus.value = false
    }
    const selectOptions = computed<any[]>(() => {
      if (!filteredOptions.value.length) return props.option
      return filteredOptions.value
    })

    const selectComputedCls = computed(() => {
      return [
        'pd-select__inner',
        {
          'select--focus': selectIsFocus.value,
        },
      ]
    })
    return () => {
      const Content = (
        <div class="pd-select">
          <div class={selectComputedCls.value} onClick={onClickSelct}>
            <input
              placeholder="请选择"
              class="pd-select__input"
              value={selectValue.value}
              readonly={!props.filterOn}
              type="text"
              onInput={onInput}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <pd-icon class="pd-select--clear" name="arrow-right" size={18}></pd-icon>
          </div>

          <Transition name="slide-fade__select">
            <div v-show={selectOptionVisible.value} class="pd-select--options" ref={selectOptionsRef}>
              {selectOptions.value.map((item, index) => (
                <div
                  class={{ 'pd-select--item': true, 'pd-select--item__active': item === props.modelValue }}
                  key={index}
                  onClick={() => onClickSelectItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </Transition>
        </div>
      )
      return Content
    }
  },
})
