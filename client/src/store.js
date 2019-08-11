import axios from 'axios'


export default {
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
            return axios.get("http://localhost:3000/todos").then(response => {
                commit("SET_URLS", response.data);
            });
        },
        getShortUrl: ({ commit }, url) => {
            return axios.post("http://localhost:3000/todos", { url }).then(response => {
                commit("SET_CURRENT_SHORT_URL", `http://localhost:3000/short/${response.data.short_url_id}`);
            });
        }
    },
    getters: {
        urls: state => state.urls,
        currentShortUrl: state => state.currentShortUrl
    }
}
