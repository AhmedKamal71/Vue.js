<template>
    <div class="container text-center">
        <h1>Admin</h1>
        <div class="row">
            <div class="col-lg-6">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="admin in data" :key="admin.name">
                            <td>{{admin.name}}</td>
                            <td>{{admin.age}}</td>
                            <td>{{admin.role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminComponent",
    props: ['adminArray'], 
    data() {
        return {
            data: [] 
        };
    },
    watch: {
        adminArray: {
            handler(newArray) {
                this.addAdmin(newArray);
            },
            immediate: true
        }
    },
    methods: {
        addAdmin(adminArray) {
            this.data = [];
            adminArray.forEach((admin) => {
                this.data.push({
                    name: admin.name,
                    age: admin.age,
                    role: admin.role
                });
            });
        }
    }
};
</script>

<style scoped>

</style>
