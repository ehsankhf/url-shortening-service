import { shallowMount } from '@vue/test-utils'
import Main from '@/components/Main.vue'
import RequestInput from '@/components/RequestInput'
import UrlList from '@/components/UrlList.vue'

describe('Main.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(Main)
    expect(wrapper.find(RequestInput).exists()).toBe(true)
    expect(wrapper.find(UrlList).exists()).toBe(true)
  })
})
