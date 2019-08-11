import {shallowMount} from '@vue/test-utils'
import UrlItem from '@/components/UrlItem.vue'

describe('UrlItem.vue', () => {
    it('renders successfully', () => {
        const wrapper = shallowMount(UrlItem, { propsData: { url: {} } })
        expect(wrapper.find('.url-item').exists()).toBe(true)
    })
})
