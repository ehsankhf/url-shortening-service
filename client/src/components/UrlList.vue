<template>
    <div class="url-list">
        <div :key="url.short_url_id" v-for="url in urls">
            <UrlItem v-bind:url="url"/>
        </div>
    </div>
</template>

<script>
    import UrlItem from './UrlItem.vue'

    export default {
        name: "UrlList",
        components: {
            UrlItem
        },
        props: {
            urls: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    .url-list {
    }
</style>
