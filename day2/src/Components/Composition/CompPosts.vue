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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
    export default {
    name: "CompPosts",
        setup() {
            let store = useStore()
            let Posts = computed(() => store.state.Posts)
            onMounted(() => {
                store.dispatch("GetAllPosts")
            })
            async function DeletePost(id) { 
                await store.dispatch("DeletePost", id)
            }
            return { Posts, DeletePost }
        }
    }
</script>

<style scoped>

</style>