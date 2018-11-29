<template>
    <main>
      <header>
        <mt-header title="登录">
          <router-link to="/" slot="left">
            <mt-button icon="back" @click="back()">返回</mt-button>
          </router-link>
          <mt-button icon="" slot="right" @click="gofirst()"><img src="../assets/image/home.png" slot="icon" ></mt-button>
        </mt-header>
      </header>
      <div class="focu">
        <img src="../assets/image/weixinbanner.gif" alt="">
      </div>
      <div class="loginmsg">
        <input type="text" placeholder="请输入用户名">
        <input type="text" placeholder="密码">

        <button>登录</button>
        <button class="register"><router-link to="/register">注册</router-link></button>
      </div>
      <div class="loginbyqq">
          <p></p>
          <span>社交账号登录</span>
          <p></p>
      </div>
      <button class="useqq">使用QQ账号登录</button>
    </main>
</template>

<script>
    export default {
        name: "login",
      methods:{
          back(){
            this.$router.go(-1);
          },
        gofirst(){
          this.$router.go('/first')
        }
      }
    }
</script>

<style scoped>
  ::-webkit-input-placeholder{
    padding-left:5px;
  }
  .mint-button-icon>img{
    width:23px;
    height:23px;
  }
  header{
    width:100%;
    height:48px;
    background:#333;
  }
  .focu>img{
    width:100%;
  }
  .loginmsg>input:nth-of-type(1){
    width:80%;
    margin-left:10%;
    height:30px;
    margin-bottom:10px;
  }
  .loginmsg>input:nth-of-type(2){
    width:80%;
    margin-left:10%;
    height:30px;
  }
  .loginmsg>button:nth-of-type(1){
    width:80%;
    height:40px;
    background:#4078c0;
    border:none;
    color:white;
    margin-left:10%;
    border-radius:6px;
    margin-top:10px;
    margin-bottom:10px;
  }
  .loginmsg>button:nth-of-type(2){
    width:80%;
    height:40px;
   border:1px solid #4078c0;
    margin-left:10%;
    /*border:none;*/
    border-radius:6px;
    color:#4078c0;
    background:white;
  }
  .loginmsg{
    margin-top:20px;
  }

  .loginbyqq{
    width:80%;
    height:40px;
    margin-left:10%;
    font-size:14px;
    margin-top:40px;
    margin-bottom:20px;
  }
  .loginbyqq>p{
    width:30%;
    color:#333;
    margin-top:20px;
    border:1px solid #ccc;
  }
  .register>a{
    text-decoration:none;
    color:#4078c0;
  }
  .loginbyqq>p:nth-of-type(1){
    float:left;
  }
  .loginbyqq>p:nth-of-type(2){
    float:right;
  }
  .loginbyqq>span{
    width:40%;
    height:40px;
    font-size:16px;
    line-height:40px;
    margin-left:20px;
  }
  .useqq{
    width:80%;
    height:48px;
    margin-left:10%;
    color:white;
    background:#71c228;
    border:none;
    border-radius:5px;
  }
</style>
