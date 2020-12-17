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
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        userpass: "",
      },
      rules: {
        username: [{required:true,message:'请输入用户名',trigger:'blur'},{min:3,max:10,message:'请输入3~10字符的用户名！',trigger:'blur'}],
        userpass: [{required:true,message:'请输入密码',trigger:'blur'},{min:6,max:30,message:'请输入6位以上密码！',trigger:'blur'}],
      },
    };
  },
  components: {},
  methods: {
    onSubmit:function(submitForm){
      this.$refs[submitForm].validate((vaild)=>{
        console.log(this.$refs);
        console.log(vaild); //true
        if(vaild){
          
          // let loginMessage = login({

          // })
        }
        // this.$router.push("home"); //判断后跳转至对应路由
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
