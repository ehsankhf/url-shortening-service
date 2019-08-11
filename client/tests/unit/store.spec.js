import sinon from 'sinon';
import moxios from 'moxios'

import Store from '../../src/store';

const { SET_URLS, SET_CURRENT_SHORT_URL } = Store.mutations
const { getShortUrl, getUrls } = Store.actions

describe('store', () => {
    describe('mutations', () => {
        it('SET_URLS', () => {
            const urls = [{ url: 'yahoo.com', short_url_id: '2232323' }]
            const state = { urls: [] }
            SET_URLS(state, urls)
            expect(state.urls).toBe(urls)
        })

        it('SET_CURRENT_SHORT_URL', () => {
            const currentShortUrl = 'yahoo.com'
            const state = { currentShortUrl: '' }
            SET_CURRENT_SHORT_URL(state, currentShortUrl)
            expect(state.currentShortUrl).toBe('yahoo.com')
        })
    })

    describe('actions', () => {
        it('getUrls', async () => {
            const commit = sinon.spy()

            moxios.install()
            moxios.stubRequest('http://localhost:3000/urls', {
                status: 200,
                response: [{ url: 'yahoo.com', short_url_id: '233232323' }]
            });

            await getUrls({ commit })
            expect(commit.args[0]).toEqual(
                ['SET_URLS', [{ url: 'yahoo.com', short_url_id: '233232323' }]],
            )

            moxios.uninstall()
        })

        it('getShortUrl', async () => {
            const commit = sinon.spy()

            moxios.install()

            moxios.stubRequest('http://localhost:3000/urls', {
                status: 200,
                response: { url: 'yahoo123.com', short_url_id: '233232323' }
            });

            await getShortUrl({ commit }, 'yahoo123.com')
            expect(commit.args[0]).toEqual(
                ['SET_CURRENT_SHORT_URL', `http://localhost:3000/short/233232323`]
            )

            moxios.uninstall()
        })
    })
})
