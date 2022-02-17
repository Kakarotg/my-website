<template>
  <div>
    <h2>个人</h2>
    <button @click="getProfileMultidata">获取数据</button>
  </div>
</template>

<script>
  import {getProfileMultidata} from "@/network/profile"

  export default {
    name: "Profile",
    data(){
      return {
        user_imfor:[]
      }
    },
    components:{
         
    },
    methods:{
      getProfileMultidata(){
        getProfileMultidata().then(res => {
          this.user_imfor = res.data
          console.log(this.user_imfor);
        })
      }
    }
  }
</script>

<style scoped>

</style>
