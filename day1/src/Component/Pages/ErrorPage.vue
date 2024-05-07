<template>
    <div class="container">
        <h2 class="bg-danger">......Oooops, Error</h2>
        <button @click="HandleBack" class="btn btn-outline-primary">Back Home</button>
    </div>
</template>

<script>
export default {
    name: "ErrorPage",
    components: {},
    methods: {
        HandleBack() {
            this.$router.push('/');
        }

    }
}
</script>

<style scoped>

</style>