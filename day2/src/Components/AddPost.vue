<template>
    <div class="container">
        <div class="row mt-3">
            <form action="" class="form" @submit="AddPost">
                <div class="row mb-3">
                    <input class="form-control" type="text" placeholder="Title" v-model="title">
                </div>
                <div class="row mb-3">
                    <input class="form-control" type="text" placeholder="Body" v-model="body">
                </div>
                <button  class="btn btn-outline-dark" type="submit" value="Add Post">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPost",
    data() {
        return {
            title: "",
            body: ""
        }
    },
    methods: {
        async AddPost() {
            await this.$store.dispatch("AddNewPost", {
                title: this.title,
                body: this.body
            })
            this.title = ""
            this.body = ""

        }
    }
}
</script>

<style scoped>

</style>