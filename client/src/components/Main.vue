<template>
    <div>
        <request-input/>
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
        actions: {
            ...mapActions(['getUrls', 'getShortUrl'])
        },
        computed: mapGetters(["urls", "currentShortUrl"]),
    }
</script>

<style scoped>

</style>
