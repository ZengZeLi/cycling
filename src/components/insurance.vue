<template>
  <main>
    <header>
      <mt-header title="骑行游记">
        <router-link to="/first" slot="left">
          <mt-button icon="back" width="60px;"></mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="login()"><img src="../assets/image/more.png" alt="" slot="icon"></mt-button>
      </mt-header>
    </header>
    <div class="focu">
      <img src="../assets/image/weixinbanner.gif" alt="">
    </div>


    <div class="content">
      <p>抱歉，指定的主题不存在或已被删除或正在被审核</p>
      <div><router-link to="/first">[ 点击这里返回上一页 ]</router-link></div>
    </div>
    <div class="read">
      <b>推荐阅读:</b>
      <p><span>荐：</span>骑行西藏游记索引——进藏前最佳参考</p>
    </div>


    <div class="empty"></div>
    <footer>
      <ul>
        <li><router-link to="/first"><div></div>首页</router-link></li>
        <li><router-link to="/forum"><div></div>论坛</router-link></li>
        <li><router-link to="/first"><div></div>搜索</router-link></li>
        <li><router-link to="/login"><div></div>登录</router-link></li>
      </ul>
    </footer>
    <div class="login">
      <div class="login-left" @click="clo()"></div>
      <div class="login-right">
        <div class="login-right-top">
          <p><router-link to="/login">登录</router-link></p>
        </div>
        <div class="login-right-serch">
          <input type="text">
          <div class="serch-icon"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import {zhuangbei} from '../assets/js/data.js'
  export default {
    name: "information",
    data(){
      return{
        zhuangbei:zhuangbei
      }
    },
    methods:{
      login(){
        $('.login').show();
      },
      a(){
        $('.a').toggleClass('bb');
        $('.b').removeClass('bb');
        $('.subordinate').toggle();
        $('.relevant').hide();
      },
      b(){
        $('.b').toggleClass('bb');
        $('.a').removeClass('bb')
        $('.relevant').toggle();
        $('.subordinate').hide()
      },
      clo(){
        $('.login').hide();
      }
    }
  }


</script>

<style scoped>
  header{
    width:100%;
    height:48px;
    margin-bottom:10px;
    background:#333;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    font-size:18px;
  }


  .focu img{
    width:100%;
  }

  .content{
    width:100%;
  }
  .content>p{
    width:88%;
    margin-left:6%;
    margin-top:100px;
    text-align:center;
  }
  .content>div{
    width:100%;
    text-align:center;
    font-size:14px;
    margin-top:30px;
    padding-bottom:80px;
    border-bottom:1px solid #eee;
  }
  .content>div a{
    color:#2782BA !important;
  }
  .read{
    font-size:14px;
  }
  .read b{
    margin-bottom:10px;
  }
  .read p span{
    color:#ff0000;
  }
  .read p{
    margin-top:10px;
    color:#0000ff;
    font-weight:bold;
  }

  .empty{
    width:100%;
    height:50px;
  }
  footer{
    width:100%;
    height:48px;
    position:fixed;
    background:white;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.06);
    bottom:0;
  }
  footer ul li{
    width:25%;
    float:left;
    text-align:center;
    line-height:80px;
    position:relative;
  }
  footer ul li{
    color:#eee !important;
    font-size:12px;
  }
  footer ul li:nth-of-type(1)>a div{
    width:100%;
    height:30px;
    background-image:url("../assets/image/icon_f.png");
    background-size:20px 360px;
    background-repeat:no-repeat;
    background-position:0 0px;
    position:absolute;
    left:50%;
    margin-left:-10px;
  }
  footer ul li:nth-of-type(2)>a div{
    width:100%;
    height:30px;
    background-image:url("../assets/image/icon_f.png");
    background-size:20px 360px;
    background-repeat:no-repeat;
    background-position:0 -240px;
    position:absolute;
    left:50%;
    margin-left:-10px;
  }
  footer ul li:nth-of-type(3)>a div{
    width:100%;
    height:30px;
    background-image:url("../assets/image/icon_f.png");
    background-size:20px 360px;
    background-repeat:no-repeat;
    background-position:0 -200px;
    position:absolute;
    left:50%;
    margin-left:-10px;
  }
  footer ul li:nth-of-type(4)>a div{
    width:100%;
    height:30px;
    background-image:url("../assets/image/icon_f.png");
    background-size:20px 360px;
    background-repeat:no-repeat;
    background-position:0 -160px;
    position:absolute;
    left:50%;
    margin-left:-10px;
  }

  .login{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    display:none;
    z-index:10;
  }
  .login-left{
    width:30%;
    height:100%;
    background:rgba(0,0,0,0.7);
    float:left;
  }
  .login-right{
    width:70%;
    height:100%;
    background:white;
    float:right;
  }
  .login-right-top{
    width:100%;
    height:140px;
    background-image:url("../assets/image/sd1.jpg");
    background-size:100% auto;
    background-repeat:no-repeat;
    position:relative;

  }
  .login-right-top p{
    width:40px;
    text-align:center;
    border-radius:5px;
    border:1px solid white;
    color:white;
    padding:5px 25px;
    left:50%;
    position:absolute;
    margin-left:-40px;
    top:50%;
    margin-top:-20px;
  }
  .login-right-top p a{
    color:white;
  }
  .login-right-serch{
    width:100%;
    height:30px;
    padding:10px;
    border-bottom:1px solid #ddd;
  }
  .login-right-serch input{
    border:none;
    width:75%;
    height:30px;
    float:left;
  }
  .login-right-serch div{
    float:right;
    margin-right:25px;
    width:30px;
    height:30px;
    background-image:url("../assets/image/icon_f.png");
    background-size:20px 360px;
    background-repeat:no-repeat;
    background-position:0 -200px;

  }
</style>
