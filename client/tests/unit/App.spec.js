import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import Main from '@/components/Main.vue'

describe('App.vue', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find(Main).exists()).toBe(true)
  })
})
