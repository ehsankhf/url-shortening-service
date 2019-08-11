<template>
    <div class="url-item">
        <span>{{url.url}}</span>{{ }}
        <a :href="'http://localhost:3000/short/'+url.short_url_id">
            {{'http://localhost:3000/short/'+url.short_url_id}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "UrlItem",
        props: {
            url: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .url-item {

    }
</style>
