<template>
  <main>
    <header>
      <mt-header title="自行车装备">
        <router-link to="/first" slot="left">
          <mt-button icon="back" width="60px;"></mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="login()"><img src="../assets/image/more.png" alt="" slot="icon"></mt-button>
      </mt-header>
    </header>
    <div class="focu">
      <img src="../assets/image/weixinbanner.gif" alt="">
    </div>
    <div class="nav">
      <p><router-link to="/first">首页</router-link> > 自行车装备</p>
      <div class="left-li">
        <ul>
          <li @click="a()" class="a">下级</li>
          <li @click="b()" class="b">相关</li>
        </ul>
      </div>
    </div>
    <div class="nav-box">
      <div class="subordinate">
        <ul>
          <li><span>自行车装...</span></li>
          <li><span>自行车极...</span></li>
          <li><span>自行车配...</span></li>
          <li><span>自行车整...</span></li>
          <li><span>智能自行...</span></li>
          <li><span>智能配件...</span></li>
          <li><span>智能可穿...</span></li>
        </ul>
      </div>
      <div class="relevant">
        <ul>
          <li><span>热点内容</span></li>
          <li><span>单车美女</span></li>
          <li><span>淘宝热卖</span></li>
          <li><span>什么装备...</span></li>
          <li><span>评测</span></li>
          <li><span>车友相册</span></li>
          <li><span>招聘信息</span></li>
          <li><span>热门专题</span></li>
          <li><span>共享单车</span></li>
          <li><span>骑行新闻</span></li>
          <li><span>展会|赛事</span></li>
          <li><span>自行车装...</span></li>
          <li><span>骑行课堂</span></li>
          <li><span>骑行游记</span></li>
          <li><span>骑行攻略</span></li>
          <li><span>山地自行...</span></li>
          <li><span>公路自行...</span></li>
          <li><span>死飞自行...</span></li>
          <li><span>BMX自行...</span></li>
          <li><span>铁人三项</span></li>
          <li><span>城市自行</span></li>
          <li><span>旅游画报...</span></li>
          <li><span>骑行北京</span></li>
          <li><span>骑行青海...</span></li>
          <li><span>台湾自由...</span></li>
          <li><span>骑行西藏</span></li>
          <li><span>品牌</span></li>
          <li><span>图书</span></li>
        </ul>
      </div>
    </div>
    <div class="list">
      <ul>
        <li v-for="n in zhuangbei">
          <div class="left">
            <img :src="n.src" alt="">
          </div>
          <div class="right">
            <p class="title">{{n.title}}</p>
            <p class="desc">{{n.desc}}</p>
            <p class="time">{{n.time}}</p>
            <p class="kind">{{n.kind}}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="empty"></div>
    <footer>
      <ul>
        <li><router-link to="/first"><div></div>首页</router-link></li>
        <li><router-link to="/first"><div></div>论坛</router-link></li>
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
  .nav{
    width:100%;
    height:48px;
    border-bottom:1px solid #eee;
    color:#666;
  }
  .nav a{
    color:#666;
  }
  .nav p{
    float:left;
    line-height:48px;
    margin-left:10px;
    font-size:15px;
  }
  .nav div{
    float:right;
    margin-right:10px;
  }
  .nav div ul li{
    float:left;
    font-size:14px;
    height:48px;
    width:30px;
    line-height:48px;
    text-align:center;
    margin-left:10px;
    position:relative;
  }
  .bb{
    border-bottom:1px solid #4078c0;
    color:#4078c0;
  }
  .nav div ul li:after{
    width:7px;
    height:7px;
    border-right:1px solid #4078c0;
    border-bottom:1px solid #4078c0;
    z-index:8;
    content:'';
    position:absolute;
    background:white;
    bottom:-5px;
    left:12px;
    transform:rotate(45deg);
    display:none;
  }
  .nav-box ul li{
    text-align:center;
    margin-top:25px;
    font-size:13px;
    float:left;
    width:25%;
    color:#aaa;
  }
  .nav-box ul li span{
    border:1px solid #eee;
    padding:5px;
  }
  .nav-box ul li:nth-of-type(4n){
    float:right;
  }
  .subordinate{
    display:none;
  }
  .subordinate ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .relevant{
    display:none;
  }
  .relevant ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .list{
    width:100%;
    margin-top:10px;
  }

  .list ul li{
    height:85px;
    padding:10px 5px;
    border-bottom:1px solid #eee;
  }
  .empty{
    width:100%;
    height:50px;
  }
  .left{
    float:left;
    flex:0;
  }
  .left img{
    width:110px;
    height:85px;
    border-radius:3px;
  }
  .right{
    height:110px;
    padding-left:111px;
    /*flex:1;*/
    margin-left:5px;
    position:relative;
  }
  .right>.title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom:5px;
    font-size:17px;
  }
  .right>.desc{
    overflow: hidden;
    white-space: nowrap;
    color:#aaa;
    font-size:13px;
    text-overflow: ellipsis;
    margin-bottom:5px;
  }
  .right>.time{
    float:left;
    color:#aaa;
    font-size:12px;
    position:absolute;
    bottom:18px;
    right:80px;
  }
  .right>.kind{
    float:right;
    color:#aaa;
    font-size:12px;
    position:absolute;
    bottom:18px;
    right:10px;
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
