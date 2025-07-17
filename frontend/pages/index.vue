<template>
  <!-- {{ user }} -->
    <!-- {{ Data.data }} -->

  <Nav  />
  <Banner />
  <RecentBlog :Data = "Data.data"/>
  <!-- <Login />
  <AdminPanal /> -->


</template>
<script>
import Nav from '~/components/Nav/nav.vue'
import Banner from '~/components/Banner/banner.vue'
import Login from "../components/account/login.vue"
import RecentBlog from '~/components/RecentBlog.vue'
import { useLoginStore } from '~/store/auth'
import { FetchedData } from '~/store/dataFetching'
export default {
  components: {
    Nav,
    Banner,
    Login

  },
  setup(){
    const Data = FetchedData();
    Data.FetchedData()
    // const value = computed(()=>{Data.FetchedData()})
    return {
      Data,
      // value
    }
  }

}


</script>