<template>
    <div>
        <request-input v-on:get-short-url="preGetShortUrl"/>
        <url-list :urls="urls"/>
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
                        return this.getShortUrl(`http://${url}`).then(this.getUrls)
                    }
                    this.getShortUrl(url).then(this.getUrls)
                }
            },
            ...mapActions(['getUrls', 'getShortUrl'])
        },
        computed: mapGetters(["urls", "currentShortUrl"]),
        created() {
            this.getUrls()
        }
    }
</script>

<style scoped>

</style>
