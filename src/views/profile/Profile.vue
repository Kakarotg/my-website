<template>
  <div>
    <h2>个人</h2>
    <button @click="getProfileMultidata">获取数据</button>
    <ul>
      <li>{{user_imfor}}</li>
    </ul>
  </div>
</template>

<script>
  import {getProfileMultidata} from "@/network/profile"

  export default {
    name: "Profile",
    data(){
      return {
        user_imfor:{
          type:Object
        }
      }
    },
    components:{
         
    },
    methods:{
      getProfileMultidata(){
        getProfileMultidata().then(res => {
          console.log(res);
          this.user_imfor = res.data.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
