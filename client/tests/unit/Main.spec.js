import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex';

import Main from '@/components/Main.vue'
import RequestInput from '@/components/RequestInput'
import UrlList from '@/components/UrlList.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Main.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            toggleDevice: jest.fn()
        }
        store = new Vuex.Store({
            state: {
                urls: [],
                currentShortUrl: ''
            },
            mutations: {
                SET_URLS: (state, urls) => (state.urls = urls),
                SET_CURRENT_SHORT_URL: (state, currentShortUrl) => (state.currentShortUrl = currentShortUrl)
            },
            actions: {
                getUrls: ({ commit }) => {
                    commit("SET_URLS", [{ url: '1', currentShortUrl: 's' }]);
                },
                getShortUrl: ({ commit }) => {
                    commit("SET_CURRENT_SHORT_URL", `http://localhost:3000/short/hehe`);
                }
            },
            getters: {
                urls: state => state.urls,
                currentShortUrl: state => state.currentShortUrl
            }
        })
    })
    it('renders successfully', () => {
        const wrapper = shallowMount(Main, { store, localVue })
        expect(wrapper.find(RequestInput).exists()).toBe(true)
        expect(wrapper.find(UrlList).exists()).toBe(true)
    })
})
