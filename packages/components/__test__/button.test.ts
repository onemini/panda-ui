import PdButton from '../button'
import PdIcon from '../icon'
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

describe('PdButton', () => {
  test('class', () => {
    const wrapper = mount(PdButton)
    expect(wrapper.classes()).toContain('pd-button')
  })
  test('class', () => {
    const wrapper = mount(PdButton, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('pd-button-primary')
  })
  test('loading', () => {
    const wrapper = mount(PdButton, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.classes()).toContain('pd-button')
  })
})
