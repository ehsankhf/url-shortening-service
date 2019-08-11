<template>
    <div class="url-list">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Source URL</th>
                <th scope="col">Shortened URL</th>
            </tr>
            </thead>
            <tbody :key="url._id" v-for="url in urls">
            <UrlItem v-bind:url="url"/>
            </tbody>
        </table>
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
        height: 80vh;
        overflow: scroll;
    }
</style>
