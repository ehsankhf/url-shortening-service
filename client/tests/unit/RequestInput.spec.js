import {shallowMount} from '@vue/test-utils'
import RequestInput from '@/components/RequestInput'

describe('RequestInput.vue', () => {
    it('renders successfully', () => {
        const wrapper = shallowMount(RequestInput, {})
        expect(wrapper.find('.request-input').exists()).toBe(true)
        expect(wrapper.find('input[type=text]').exists()).toBe(true)
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('should call the event with the initial value of inputUrl', () => {
        const wrapper = shallowMount(RequestInput)
        wrapper.vm.getShortUrl({ preventDefault: jest.fn })
        expect(wrapper.emitted()['get-short-url'][0]).toEqual([""])
    })
})
