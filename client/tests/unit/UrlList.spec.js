import {shallowMount} from '@vue/test-utils'
import UrlList from '@/components/UrlList.vue'

describe('Main.vue', () => {
    it('renders successfully', () => {
        const wrapper = shallowMount(UrlList, { propsData: { urls: [] } })
        expect(wrapper.find('.url-list').exists()).toBe(true)
    })
})
