<script setup>
import { ref,onMounted } from 'vue';

const title = ref('');
const body = ref('');
const author = ref('');
const posts = ref([]);
const SinglePost = ref({});

const getAllData = async ()=>{
  try{
    const res = await fetch('http://localhost:5000/api/posts');
    if(res.ok){
    const data =await res.json()
    this.data.value = data;
  // posts.value = Array.isArray(data) ? data : [];
    }
    else{
      console.log("Res response un successfull ")
    }
   
  }
  catch(err){
    console.log(err)
  }
}
const singleOne = async ()=>{
  try{
    const res = await fetch('http://localhost:5000/api/posts/1')
    if(res.ok){
      const data = await res.json();
 SinglePost.value = data;
    }
  }
  catch(err){
    console.log(err)
  }
}

const submitPost = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        body: body.value,
        author: author.value
      })
    });
    const result = await response.json();
    // console.log('Saved:', result);
  } catch (err) {
    console.error('Error saving post:', err);
  }

};
// getAllData();
onMounted(() => {
  getAllData();
  singleOne();
});
// alert(getAllData())
// console.log(getAllData())
</script>


<template>
  <div v-for="(element,index) in posts" :key="element._id" class="flex justify-center align-middle gap-10 border-2 p-1 font-bold">
 <p>{{ index }}</p>   
  <p>{{ element._id}}</p>
<p>{{ element.title }}</p>
<p>{{ element.author }}</p>
  </div>

  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h2 class="text-2xl font-bold text-center text-blue-700">Create Post</h2>

      <input v-model="title" type="text" placeholder="Title"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300" />

      <textarea v-model="body" placeholder="Content"
        class="w-full border px-3 py-2 rounded h-24 resize-none focus:outline-none focus:ring focus:ring-blue-300"></textarea>

      <input v-model="author" type="text" placeholder="Author"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300" />

      <button @click="submitPost" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Save Post
      </button>

      <p v-if="success" class="text-green-600 text-center"> Post saved successfully!</p>
    </div>
  </div>
</template>
