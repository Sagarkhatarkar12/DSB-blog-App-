<template>
    <Nav />
    <div class="h-screen flex justify-center items-center">

        <form @submit.prevent="HandleSignUp"
            class="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 w-[90%] md:w-[40vw]">
            <div>
                <h1 class="font-bold text-4xl text-green-600">Sign Up to our Blog App</h1>
            </div>
            <div class="flex flex-col p-1  gap-1">
                <label for="" class="text-lg font-semibold">User Name</label>
                <input v-model="form.userName" type="text" class=" p-1 border-2 rounded-sm"
                    placeholder="Enter the username..." required minlength="3" maxlength="20"
                    pattern="^[a-zA-Z0-9_]{3,20}$">
            </div>
            <div class=" flex flex-col p-1 ">
                <label for="" class=" text-lg font-semibold">Email</label>
                <input v-model="form.email" type="email" class="p-1 border-2 rounded-sm " required
                    placeholder="Enter the Email">
            </div>
            <div class="flex flex-col p-1 ">
                <label for="" class="text-lg font-semibold">Password</label>
                <input v-model="form.password" required minlength="8"
                    pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Password must have 8+ chars, uppercase, lowercase, number & special char" type="text"
                    class="p-1 border-2 rounded-sm ">
            </div>
            <div class="flex flex-col p-1 ">
                <label for="" class="text-lg font-semibold">Confirm- password</label>
                <input v-model="form.cpassword" type="text" required class="p-1 border-2 rounded-sm ">
            </div>
            <div class="flex flex-col p-1 ">
                <label for="" class="text-lg font-semibold">Profile Image</label>
                <input type="file" class="p-1 border-2 rounded-sm " accept=".jpg,.jpeg,.png" @change="handleFileUpload"
                    name="" id="">
            </div>
            <!-- Submit Button -->
            <button type="submit"
                class="bg-blue-500 text-white cursor-pointer font-bold py-2 rounded-lg hover:bg-blue-600 transition">
                Sign Up
            </button>
            <div class="flex gap-2 items-center justify-center text-gray-500 ">
                <hr class="w-[40%]">
                <p>or</p>
                <hr class="w-[40%]">
            </div>
            <div class="flex gap-1 w-full">
                <button type="submit"
                    class="bg-red-500 text-white font-bold cursor-pointer py-2 rounded-lg w-full hover:bg-red-600 transition">
                    Google
                </button>
                <button type="submit"
                    class="bg-black text-white font-bold py-2 cursor-pointer rounded-lg w-full hover:bg-black transition">
                    Github
                </button>
            </div>

        </form>
    </div>
</template>
<script>
import Nav from '../Nav/nav.vue';
import { useLoginStore } from "../../store/auth"
export default {
    components: {
        Nav
    }
    ,
    data() {
        return {

            form: {
                userName: "",
                email: "",
                password: "",
                cpassword: ""

            }
        }

    },
    methods: {
        handleFileUpload(e) {
            const file = e.target.files[0];
            if (file && file.size > 2 * 1024 * 1024) {
                alert("File size exceeds 2mb");
                e.target.value = "";
            }
        },
        HandleSignUp() {

            if (!this.form.userName.match(/^[a-zA-Z0-9_]{3,20}$/)) {
                alert("Invalid username");
                return;
            }
            if (this.password != this.cpassword) {
                alert("password do not match")
                return
            }

           
            //    Process send to backend 
            const ragister = useLoginStore();
            ragister.registerUser(this.form);
            
             this.form = {
                userName: "",
                email: "",
                password: "",
                cpassword: ""
            }

        }

    }
}
</script>