import { shallowMount } from '@vue/test-utils'
import UrlList from '@/components/UrlList.vue'

describe('Main.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(UrlList)
    expect(wrapper.find('.url-list').exists()).toBe(true)
  })
})
