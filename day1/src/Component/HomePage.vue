<template>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" v-model="age" placeholder="Enter Age">
                </div>
                <div class="form-group">
                    <label>Role</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="role" value="admin" id="admin">
                        <label class="form-check-label" for="admin">Admin</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="role" value="user" id="user">
                        <label class="form-check-label" for="user">User</label>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="col-5 m-3 ">
            <button class="btn btn-outline-dark" @click="user()" >User</button>
        </div>
        <div class="col-5 m-3 ">
            <button class="btn btn-outline-danger" @click="admin()" >Admin</button>
        </div>
    </div>
        <div class="col-lg-6">
            <AdminComponent v-if="flag === true" :adminArray="adminArray" />
            <UserComponent v-if="flag === false" :userArray="userArray"/>
        </div>
</div>

</template>

<script>
import AdminComponent from './AdminCompnent.vue'
import UserComponent from './UserComponent.vue'
export default {
    name: "HomePage",
    components: {
        AdminComponent,
        UserComponent
    },
    data() {
        return {
            userRoleComponent: 'UserComponent',
            name: '',
            age: 0,
            role: 'user',
            adminArray: [],
            adminData: {},
            userArray: [],
            userData: {},
            flag: false
        }
    },
    methods: {
    submitForm() {
      if(this.role === 'admin') {
        this.adminData = {
          name: this.name,
            age: this.age,
            role: this.role
          };
        this.adminArray.push(this.adminData);
      } else {
        this.userData = {
          name: this.name,
            age: this.age,
            role: this.role
          };
        this.userArray.push(this.userData);
      }
    },
        user() {
            if (this.flag == true) {
                this.flag = false
            }
        },
        admin() {
            if (this.flag == false) {
                this.flag = true
            }
        }
    }
}
</script>

<style scoped>

</style>