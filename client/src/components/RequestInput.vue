<template>
    <div class="request-input">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="inputUrl" placeholder="Please enter a URL..." aria-label="Please enter a URL" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="input-group-text" id="basic-addon2" v-on:click="getShortUrl">Generate Short URL</button>
            </div>
        </div>
    </div>
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
