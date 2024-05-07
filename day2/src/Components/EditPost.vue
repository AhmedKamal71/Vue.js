<template>
    <div>
        <div class="container">
            <div class="row mt-3">
                <form action="" class="form" @submit.prevent="UpdatePost">
                    <div class="row mb-3">
                        <input class="form-control" type="text" placeholder="Title" v-model="title">
                    </div>
                    <div class="row mb-3">
                        <input class="form-control" type="text" placeholder="Body" v-model="body">
                    </div>
                    <button  class="btn btn-outline-dark" type="submit" value="Add Post">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditPost",
        data() {
            return {
                title: "",
                body: ""
            }
        },
        methods: {
            async UpdatePost() {
                await this.$store.dispatch("EditPost", {
                    id: this.$route.params.id,
                    title: this.title,
                    body: this.body
                })
                this.title = ""
                this.body = ""
                console.log(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>