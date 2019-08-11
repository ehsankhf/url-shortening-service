<template>
    <tr class="url-item">
        <td>{{url.url}}</td>
        <td>
            <a :href="'http://localhost:3000/short/'+url.short_url_id">
                {{'http://localhost:3000/short/'+url.short_url_id}}
            </a>
        </td>
    </tr>
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
