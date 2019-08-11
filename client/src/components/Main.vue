<template>
    <div>
        <request-input v-on:get-short-url="preGetShortUrl"/>
        <url-list/>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    import UrlList from './UrlList.vue'
    import RequestInput from './RequestInput.vue'

    export default {
        name: "Main",
        components: {
            UrlList,
            RequestInput
        },
        methods: {
            preGetShortUrl(url) {
                if (url.length) {
                    if (!/^http:\/\//.test(url)) {
                        return this.getShortUrl(`http://${url}`)
                    }
                    this.getShortUrl(url)
                }
            },
            ...mapActions(['getUrls', 'getShortUrl'])
        },
        computed: mapGetters(["urls", "currentShortUrl"]),
        created() {
        }
    }
</script>

<style scoped>

</style>
