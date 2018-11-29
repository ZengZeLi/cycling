<template>
  <main>
    <header>
      <mt-header title="注册">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back()">返回</mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="gofirst()"><img src="../assets/image/home.png" slot="icon" ></mt-button>
      </mt-header>
    </header>
    <div class="focu">
      <img src="../assets/image/weixinbanner.gif" alt="">
    </div>
    <div class="warn">
      <p>骑行圈</p>
      <p>hi,欢迎访问本站... ...</p>
      <p>由于广告机器人泛滥，注册请先关注微信公众号“骑行圈”，然后回复“验证码”，获取注册验证码。</p>
    </div>
    <div class="registermsg">
      <input type="text" placeholder="用户名：3-15位">
      <input type="text" placeholder="密码">
      <input type="text" placeholder="确认密码">
      <input type="text" placeholder="邮箱">

      <button>立即注册</button>
      <button class="register"><router-link to="/login">登录</router-link></button>
    </div>

  </main>
</template>

<script>
  export default {
    name: "register",
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
  .warn{
    width:80%;
    margin-left:10%;
    margin-top:30px;
  }
  .warn p:nth-of-type(1){
    color:#666;
    font-size:24px;
  }
  .warn p:nth-of-type(2){
    color:#888;
    font-size:14px;
  }
  .warn p:nth-of-type(3){
    color:red;
    font-size:14px;
  }
  .registermsg>input:nth-of-type(1){
    width:80%;
    margin-left:10%;
    height:30px;
    margin-bottom:10px;
  }
  .registermsg>input:nth-of-type(2){
    width:80%;
    margin-left:10%;
    height:30px;
    margin-bottom:10px;
  }
  .registermsg>input:nth-of-type(3){
    width:80%;
    margin-left:10%;
    height:30px;
    margin-bottom:10px;
  }
  .registermsg>input:nth-of-type(4){
    width:80%;
    margin-left:10%;
    height:30px;
    margin-bottom:10px;
  }
  .registermsg>button:nth-of-type(1){
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
  .registermsg>button:nth-of-type(2){
    width:80%;
    height:40px;
    border:1px solid #4078c0;
    margin-left:10%;
    /*border:none;*/
    border-radius:6px;
    color:#4078c0;
    background:white;
  }
  .registermsg{
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

  .register>a{
    text-decoration:none;
    color:#4078c0;
  }


</style>
