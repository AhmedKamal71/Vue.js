<template>
    <div class="container">
        <table class="table table-striped table-hover text-center">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in prod" :key="p._id">
                    <td>{{p.id}}</td>
                    <td>{{p.title}}</td>
                    <td>{{p.price}}</td>
                    <td>
                        <router-link :to="'/product/'+p.id" class="btn btn-primary m-1">Show</router-link>
                        <router-link :to="'/edit/'+p.id" class="btn btn-success m-1">Edit</router-link>
                        <button @click="DeleteProductById(p.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'; 
export default {
    name: "ProductsPage",
    components: {},
    data() {
        return {
            prod:[]
        };
    },
    methods: {
        GetAllProducts() {
            axios.get("http://localhost:2000/products").then(res => {
                this.prod = res.data;
            })
                .catch(err => console.log(err));            
        },
        DeleteProductById(id) {
            axios.delete('http://localhost:2000/products/'+id).then(res => { console.log(res); }).catch(err => console.log(err));
            this.$router.go();
        }
    },
    created() {
        this.GetAllProducts();
        }
    }
</script>

<style scoped>

</style>