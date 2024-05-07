<template>
    <div class="container text-center justify-content-center">
        <h1>User</h1>
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
                        <tr v-for="user in data" :key="user.name">
                            <td>{{user.name}}</td>
                            <td>{{user.age}}</td>
                            <td>{{user.role}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserComponent",
    props: ['userArray'], 
    data() {
        return {
            data: [] 
        };
    },
    watch: {
        userArray: {
            handler(newArray) {
                this.addUser(newArray);
            },
            immediate: true
        }
    },
    methods: {
        addUser(userArray) {
            this.data = [];
            userArray.forEach((user) => {
                this.data.push({
                    name: user.name,
                    age: user.age,
                    role: user.role
                });
            });
        }
    }
};
</script>

<style scoped>

</style>
