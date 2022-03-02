<template>
  <div>
    <div>
        <h2>请注册</h2>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getRegister">注册</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
  import {Register} from "@/network/profile"
  export default {
    name:'Register',
    data(){
      return {
        username:'',
        password:'',
        form:{}
      }
    },
    methods:{
      //注册提交
      getRegister() {
        Register(this.username,this.password).then(res => {
          console.log(res);
          if(res.data.status == '0'){
            this.$alert('<strong>注册成功<i></i></strong>', '消息提示', {
              dangerouslyUseHTMLString: true
            });
            this.username=''
            this.password=''
            this.$router.push({ path: '/profile' });
          }else{
            this.$alert('<strong>格式错误，请重新输入<i></i></strong>', '消息提示', {
              dangerouslyUseHTMLString: true
            });
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>