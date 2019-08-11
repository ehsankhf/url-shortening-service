import { shallowMount } from '@vue/test-utils'
import RequestInput from '@/components/RequestInput'

describe('Main.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(RequestInput)
    expect(wrapper.find('.request-input').exists()).toBe(true)
  })
})
