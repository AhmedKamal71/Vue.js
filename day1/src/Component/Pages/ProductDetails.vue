<template>
    <div class="container">
        <h1>Product Details</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h3>{{product.title}}</h3>
                        </div>
                        <div class="card-body">
                            <p>{{product.description}}</p>
                            <p>Price: {{product.price}}</p>
                            <p>Category: {{product.category}}</p>
                            <p>Brand: {{product.brand}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "ProductDetails",
    components: {},
    data() { 
        return {
            id: '',
            product: []
        };
    },
    methods: {
        GetProductDetails() {
            this.id = this.$route.params.id;
            axios.get("http://localhost:2000/products/"+this.id).then(res => {
                this.product = res.data; 
                console.log(this.product)
            }).catch(err => console.log(err));
        }
    },
    created() {
        this.GetProductDetails();
        }
    }
</script>

<style scoped>

</style>