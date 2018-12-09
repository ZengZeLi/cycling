<template>
  <main>
    <header>
      <mt-header title="AA约伴，活动">
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
      <ul>
        <li>全部</li>
        <li>排序</li>
        <li>热门</li>
        <li>精华</li>
        <li>分类</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="content-top">
            <span class="content-kind">置顶</span>
            <p class="content-title a">让我们走的更远——新人入门骑行装备推荐（2018.04.28日更新）</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">太阳鸟</p>
            <p class="content-time">2011-6-30 </p>
            <p class="content-talk"><span></span>243</p>
            <p class="content-view"><span></span><s>500491</s></p>
          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind">置顶</span>
            <p class="content-title b">骑行圈骑行知识汇总——新人快速成长的葵花宝典</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">太阳鸟</p>
            <p class="content-time">2011-2-19  </p>
            <p class="content-talk"><span></span>130</p>
            <p class="content-view"><span></span>169104</p>
          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind">置顶</span>
            <p class="content-title b">新人必读——论坛使用说明集中整理</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">静静</p>
            <p class="content-time">2011-12-18 </p>
            <p class="content-talk"><span></span>121</p>
            <p class="content-view"><span></span>125895</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind">置顶</span>
            <p class="content-title b">2018年长途骑行约伴汇总，川藏，丝绸之路，新疆，东南亚等</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">太阳鸟</p>
            <p class="content-time">2018-2-25  </p>
            <p class="content-talk"><span></span>16</p>
            <p class="content-view"><span></span>7905</p>
          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind c">新人贴</span>
            <p class="content-title">2018年春节深圳出发骑行回贵州，约伴同行 </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">tk650171</p>
            <p class="content-time">2018-1-28  </p>
            <p class="content-talk"><span></span>3</p>
            <p class="content-view"><span></span>766</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind d">图片</span><span class="content-kind c">新人贴</span>
            <p class="content-title">海南环岛</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">cm5656</p>
            <p class="content-time">2018-1-24 </p>
            <p class="content-talk"><span></span>7</p>
            <p class="content-view"><span></span>847</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <!--<span class="content-kind">置顶</span>-->
            <p class="content-title"> 北京的加个微信吧 </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">意中天觅</p>
            <p class="content-time">2018-7-20 /p>
            <p class="content-talk"><span></span>5</p>
            <p class="content-view"><span></span>600</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <!--<span class="content-kind">置顶</span>-->
            <p class="content-title"> 6月初骑行丙察察-拉萨   </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">qx166</p>
            <p class="content-time">2018-5-29  </p>
            <p class="content-talk"><span></span>16</p>
            <p class="content-view"><span></span>567</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <!--<span class="content-kind">置顶</span>-->
            <p class="content-title"> 19年6月骑行青藏线   </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">mm531126</p>
            <p class="content-time">昨天 20:01 </p>
            <p class="content-talk"><span></span>1</p>
            <p class="content-view"><span></span>65</p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind c">新人贴</span>
            <p class="content-title"> 青藏线骑行  </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">蚌埠教母</p>
            <p class="content-time">2018-5-24 </p>
            <p class="content-talk">7<span></span></p>
            <p class="content-view">676<span></span></p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <span class="content-kind d">图片</span>
            <p class="content-title"> 轻骑川藏4+2最经典的川藏路段没有时间的障碍只差你的决心 </p>
          </div>
          <div class="content-bottom">
            <p class="content-author">爱笑的大闫</p>
            <p class="content-time">2018-5-29</p>
            <p class="content-talk">7<span></span></p>
            <p class="content-view">587<span></span></p>

          </div>
        </li>
        <li>
          <div class="content-top">
            <!--<span class="content-kind c">新人贴</span>-->
            <p class="content-title">2018年国庆香格里拉-稻城亚丁骑行约伴</p>
          </div>
          <div class="content-bottom">
            <p class="content-author">沁兰</p>
            <p class="content-time">2018-8-12</p>
            <p class="content-talk">7<span></span></p>
            <p class="content-view">690<span></span></p>

          </div>
        </li>
      </ul>
    </div>


    <div class="empty"></div>
    <footer>
      <ul>
        <li><router-link to="/first"><div></div>首页</router-link></li>
        <li><router-link to="/forum"><div></div>论坛</router-link></li>
        <li><router-link to="/login"><div></div>收藏</router-link></li>
        <li><router-link to="/login"><div></div>发帖</router-link></li>
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
  .nav ul{
    border-bottom:1px solid #eee;
  }
  .nav ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .nav ul li{
    float:left;
    width:20%;
    height:48px;
    line-height:48px;
    text-align:center;
    font-size:14px;
    color:#aaa;
  }
  .nav ul li:nth-of-type(1){
    color:#4078c0;
    border-bottom:1px solid #4078c0;
  }
  .nav ul li:nth-of-type(1):after{
    content:'';
    clear:both;
    width:10px;
    height:10px;
    display:block;
    border-right:1px solid #4078c0;
    border-bottom:1px solid #4078c0;
    position:absolute;
    transform:rotate(45deg);
    background:white;
    left:30px;
    margin-top:-5px;
  }
  .a{
    color:#8F2A90;
    font-weight:bold;
  }
  .b{
    color:#EE1B2E;
    font-weight:bold;
  }
  .c{
    background:red !important;
  }
  .d{
    background:#4078c0 !important;
  }
  .content ul li{
    padding:10px 0;
    border-bottom:1px solid #eee;
  }
  .content-top{
    margin-top:10px;
    padding:0 5px;
  }
  .content-kind{
    color:white;
    background:orangered;
    padding:2px;
    font-size:12px;
    float:left;
  }
  .content-bottom{
    margin-top:5px;
    padding:0 5px;
  }
  .content-bottom:after{
    content:'';
    display:block;
    clear:both;
  }
  .content-bottom p{
    float:left;
    font-size:12px;
    color:#aaa;
  }
  .content-author{
  }
  .content-time{
    margin-left:5px;
    line-height:20px;
  }
  .content-view{
    /*margin-left:150px;*/
    line-height:20px;
    float:right !important;
    margin-right:11px;
  }
  .content-view>span{
    display:block;
    width:20px;
    height:20px;
    float:left;
    background-image:url("../assets/image/icon_b.png");
    background-repeat:no-repeat;
    background-size:20px 208px;
    background-position:0 -60px;
  }
  .content-talk{
    /*margin-left:5px;*/
    line-height:20px;
    float:right !important;
    width:50px;
    text-align:left;
  }
  .content-talk>span{
    display:block;
    width:20px;
    height:20px;
    /*float:right;*/
    float:left;
    margin-right:1px;
    background-image:url("../assets/image/icon_b.png");
    background-repeat:no-repeat;
    background-size:20px 208px;
    background-position:0 -40px;
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
    background-position:0 -120px;
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
    background-position:0 -40px;
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
