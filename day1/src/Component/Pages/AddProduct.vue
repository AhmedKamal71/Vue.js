<template>
<div class="container">
    <h1 class="mt-5 text-center">Add Product</h1>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <form>
                <div class="form-group">
                    <label for="title">Product Title</label>
                    <input type="text" class="form-control" v-model="title" id="title" placeholder="Enter Product Title">
                </div>
                <div class="form-group">
                    <label for="description">Product Description</label>
                    <textarea class="form-control" v-model="description" id="description" rows="3" placeholder="Enter Product Description"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="price">Product Price</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="number" class="form-control" id="price" v-model="price" placeholder="Enter Product Price">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="category">Product Category</label>
                        <input type="text" class="form-control" v-model="category" id="category" placeholder="Enter Product Category">
                    </div>
                </div>
                <button type="button" class="btn btn-primary mt-3" @click="AddProduct()">Add Product</button>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';
    export default {
        name: "AddProduct",
    components: {},
    data() {
        return {
            price: 0,
            title: '',
            description: '',
            category: ''
        };
    },
    methods: {
        AddProduct() {
            let product = {
                title: this.title,
                description: this.description,
                price: this.price,
                category: this.category
            };
            axios.post("http://localhost:2000/products", product).then(res => {
                console.log(res);
            }).catch(err => console.log(err));
            console.log(product);
            this.$router.push('/products');
        }
    }
    }
</script>

<style scoped>

</style>