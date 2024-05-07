<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for=" post in Posts" :key='post.title'>
                <td>{{ post.id }}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
                <td>
                    <div class="d-flex">
                        <router-link :to="'/post/'+post.id" class="btn btn-outline-primary">Show</router-link>
                        <router-link :to="'/edit/'+post.id" class="btn btn-outline-dark">Edit</router-link>
                        <button class="btn btn-outline-danger" @click="DeletePost(post.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: "AllPosts",
    data() {
        return {
        }
    },
    computed: {
        Posts() {
            return this.$store.state.Posts
        }
    },
    methods: {
        async GetAllPosts() {
            await this.$store.dispatch("GetAllPosts")
        },
        async DeletePost(id) { 
         await this.$store.dispatch("DeletePost", id)
    }
    },

    created() {
        this.GetAllPosts()
    }
}
</script>

<style scoped>

</style>