<template>
  <div>
    <div v-if="isLogin==false">
      <h2>请登录</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getProfileMultidata">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <h2>您好，{{username}}</h2>
    </div>
    
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
        password:'',
        isLogin:false,
        form:{}
      }
    },
    components:{
      
    },
    computed:{
      
    },
    methods:{
      getProfileMultidata(){
        getProfileMultidata(this.username,this.password).then(res => {
          console.log(res);
          if(res.data.status == '0'){
            this.isLogin = true
            this.user_imfor = res.data.data
            this.$alert('<strong>登陆成功<i></i></strong>', '消息提示', {
              dangerouslyUseHTMLString: true
            });
            //this.$router.push({ path: '/profile' });
          }else{
            this.$alert('<strong>用户名或密码错误<i></i></strong>', '消息提示', {
              dangerouslyUseHTMLString: true
            });
          }
          console.log(res);
          
          
          
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
