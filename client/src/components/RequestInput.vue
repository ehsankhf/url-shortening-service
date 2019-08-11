<template>
    <form @submit="getShortUrl" class="request-input">
        <input type="text" v-model="inputUrl">
        <input type="submit">
    </form>
</template>

<script>
    export default {
        name: "RequestInput",
        methods: {
            getShortUrl(event) {
                event.preventDefault()
                this.$emit('get-short-url', this.inputUrl)
            }
        },
        data() {
            return {
                inputUrl: ''
            }
        }
    }
</script>

<style scoped>
    .request-input {
    }
</style>
