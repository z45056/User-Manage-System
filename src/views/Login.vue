<template>
  <div id="login">
    <div class="login-area">
      <h1>用户登录</h1>
      <div class="login-content">
        <el-form
          :model="form"
          ref="submitForm"
          :rules="rules"
          :inline="false"
          size="normal"
        >
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="userpass">
            <el-input v-model="form.userpass" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('submitForm')"
              >立即登录</el-button
            >
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import  plugins  from "@/plugins/axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "admin",
        userpass: "admin",
      },
      rules: {
        username: [{required:true,message:'请输入用户名',trigger:'blur'},{min:3,max:10,message:'请输入3~10字符的用户名！',trigger:'blur'}],
        userpass: [{required:true,message:'请输入密码',trigger:'blur'},{min:4,max:30,message:'请输入6位以上密码！',trigger:'blur'}],
      },
    };
  },
  components: {},
  methods: {
    onSubmit:function(submitForm){
      console.log()

      //管理员登录
      Vue.axios.post('admin/login',{user_name:this.form.username,password:this.form.userpass}).then((res)=>{
        console.log(res);
        if(res.data.status === 1){
          this.$router.push("home"); //判断后跳转至对应路由
        }

      }).catch((err)=>{
        console.log(err);
      })
      this.$refs[submitForm].validate((vaild)=>{
        console.log(this.$refs);
        console.log(vaild); //true
        if(vaild){



          // let loginMessage = login({

          // })
        }
        // 
      })
    }
    
  },
};
</script>
<style lang="less" scoped>
#login {
  width: 100%;
  height: 100vh;
  background-color: skyblue;
  overflow: hidden;
  .login-area {
    margin: 200px auto;
    width: 320px;
    height: 280px;
    padding: 10px 40px;
    
    h1 {
      font-size: 20px;
      color: slategrey;
      height: 40px;
      line-height: 40px;
    }

    .login-content {
      el-form {
        el-form-item {
          el-input {
          }
        }
      }
    }
  }
}
</style>
