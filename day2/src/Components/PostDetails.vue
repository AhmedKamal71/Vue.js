<template>
<div class="container">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for=" post in Posts" :key='post.title'>
                <td>{{ post.id }}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
    name: "PostDetails",
        computed: {
            Posts() {
                return this.$store.state.Posts
            }
    },
        methods: {
            async GetPost() {
                await this.$store.dispatch("GetPostById", this.$route.params.id)
            }
    },
    mounted() {
        this.GetPost()
    }
    }
</script>

<style scoped>

</style>