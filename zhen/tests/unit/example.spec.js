import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import LazyLoad from '@/components/LazyLoad.vue'

describe('LazyLoad.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(LazyLoad, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
