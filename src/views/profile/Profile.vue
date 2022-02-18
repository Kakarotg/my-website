<template>
  <div>
    <h2>个人</h2>
    <textarea type="text" name="username" v-model="username"></textarea>
    <h2>{{username}}</h2>
    <textarea type="password" name="password" v-model="password"></textarea>
    <h2>{{password}}</h2>
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
        },
        username:'',
        password:''
      }
    },
    components:{
         
    },
    methods:{
      getProfileMultidata(){
        getProfileMultidata(this.username,this.password).then(res => {
          console.log(res);
          this.user_imfor = res.data.data
        })
      }
      /* login(){
            this.$axios.post(this.HOST+'/login',{username:this.username,password:this.password})
            .then(res=>{
                console.log(res);
                this.user_imfor = res.data.data
            })
            .catch(err=>{
                console.log(err)
            })
        } */
    }
  }
</script>

<style scoped>

</style>
