<template>
  <div id="">
    <router-view></router-view>
    <header >
      <img src="./assets/image/logo.png" alt="">
      <div class="rightone"  @click="more()"></div>
      <div class="righttwo"><router-link to="/login" ><div class="empty"></div></router-link></div>
      <ul v-if="m">
        <li><router-link to="/forum">论坛</router-link></li>
        <li>导读</li>
        <li>搜索</li>
      </ul>
    </header>
    <nav >
      <ul>
        <li><router-link to="/information">资讯</router-link></li>
        <li><router-link to="/equipment">装备</router-link></li>
        <li><router-link to="/strategy">攻略</router-link></li>
        <li><router-link to="/journey">游记</router-link></li>
        <li><router-link to="/knowledge">知识</router-link></li>
        <li><router-link to="/forum">论坛</router-link></li>
        <li><router-link to="/companion">约伴</router-link></li>
        <li><router-link to="/secondhand">二手</router-link></li>
        <li><router-link to="/insurance">保险</router-link></li>
        <li><router-link to="/mall">商城</router-link></li>
      </ul>
    </nav>
    <div class="swipe" >
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./assets/image/banner1.jpg" alt=""><span class="f">20180111晴</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner2.jpg" alt=""><span class="f">春日游白龟湖</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner3.jpg" alt=""><span class="f">海外进口自行车</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner4.jpg" alt=""><span class="f">骑行新疆之初遇沙尘暴</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner5.jpg" alt=""><span class="f">法国原产</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner6.jpg" alt=""><span class="f">我终于圆梦</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner7.jpg" alt=""><span class="f">帅</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner8.jpg" alt=""><span class="f">凉蓬下（二）</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner9.jpg" alt=""><span class="f">骑行沙漠“红砖路”，穿越神秘罗布泊！</span></mt-swipe-item>
        <mt-swipe-item><img src="./assets/image/banner10.jpg" alt=""><span class="f">凉蓬下</span></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="tab" >
      <div class="tab-btn">
        <mt-button size="small" @click.native.prevent="active = 'tab-container1'"  @click="target='btn1'" :class="{on: target==='btn1'}">最新</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container2'"  @click="target='btn2'" :class="{on: target==='btn2'}">资讯</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container3'"  @click="target='btn3'" :class="{on: target==='btn3'}">装备</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container4'"  @click="target='btn4'" :class="{on: target==='btn4'}">游记</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container5'"  @click="target='btn5'" :class="{on: target==='btn5'}">攻略</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container6'"  @click="target='btn6'" :class="{on: target==='btn6'}">知识</mt-button>
      </div>


      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in news" >
            <!--{{n.src}}-->
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in info" >
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in equipment">
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <mt-cell v-for="n in journey">
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5">
          <mt-cell v-for="n in strategy">
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container6">
          <mt-cell v-for="n in knowledge">
            <img :src='n.src' alt="">
            <p>{{n.title}}</p>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="footer">
      <ul>
        <li><img src="./assets/image/common_367_icon.png" alt=""><p>新人报道区</p></li>
        <li><img src="./assets/image/common_150_icon.gif" alt=""><p>AA约伴,活动</p></li>
        <li><img src="./assets/image/common_340_icon.png" alt=""><p>N内蒙古车...</p></li>
        <li><img src="./assets/image/forum_new.gif" alt=""><p>商业信息发...</p></li>
        <li><img src="./assets/image/common_15_icon.png" alt=""><p>旅行故事</p></li>
        <li><img src="./assets/image/common_12_icon.gif" alt=""><p> 论坛事务</p></li>
        <li><img src="./assets/image/forum_new.gif" alt=""><p>广播专版</p></li>
        <li><img src="./assets/image/common_374_icon.jpg" alt=""><p>国外车友交...</p></li>
      </ul>
      <ol>
        <li>首页</li>
        <li>|</li>
        <li>论坛</li>
        <li>|</li>
        <li>导读</li>
        <li>|</li>
        <li>搜索</li>
      </ol>
      <small>Copyright © 2016 站点名称</small>
    </div>

  </div>

</template>
<script>
  import {news,info,equipment,journey,strategy,knowledge} from './assets/js/data.js'

  export default {
    name: '',
    data () {
      return {
        news:news,
        info:info,
        equipment:equipment,
        journey:journey,
        strategy:strategy,
        knowledge:knowledge,
        msg: 'Welcome to Your Vue.js App',
        active:'tab-container1',
        target:'btn1',
        m:false
      }
    },
    methods:{
      more(){
        this.m=!this.m;
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
  }
  header img{
    width:128px;
  }
  .rightone{
    width:40px;
    height:40px;
    float:right;
    background-image:url("./assets/image/user.png");
    background-position:0 -30px;
    background-size:35px 70px;
    background-repeat:no-repeat;
  }
  .righttwo{
    width:40px;
    height:40px;
    float:right;
    background-image:url("./assets/image/user.png");
    background-position:0 10px;
    background-size:35px 70px;
    background-repeat:no-repeat;
  }
  .empty{
    width:100%;
    height:40px;
  }
  header ul{
    z-index:10;
    padding:0 30px;
    background:rgba(0,0,0,0.8);
    color:white;
    border-radius:5px;
    position:absolute;
    right:2px;
    /*display:none;*/
  }
  header ul li{
    margin:15px 0;
    font-size:14px;
  }
  header ul li a{
    color:white;
  }
  header ul:before{
    content:'';
    display:block;
    width:0;
    height:0;
    position:absolute;
    border:5px solid;
    border-color:transparent transparent rgba(0,0,0,0.8) transparent;
    margin-top:-10px;
    right:17px;
  }
  nav ul:after{
    content:'';
    display:block;
    clear:both;
  }

  nav ul li{
    float:left;
    width:20%;
    text-align:center;
    margin:3px 0 10px;
  }

  .footer ul{
    margin:20px 0 ;
  }
  .footer ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .footer ul li{
    float:left;
    width:25%;
    height:70px;
    text-align:center;
    font-size:14px;
  }
  .footer ul li img{
    width:38px;
    height:38px;
  }
  .footer ul li p{
    font-size:13px;
  }
  .footer ol:after{
    content:'';
    display:block;
    clear:both;
  }
  .footer ol{
    width:50%;
    margin-left:25%;
    margin-top:5px;
    margin-bottom:15px;
  }
  .footer ol li{
    float:left;
    margin-left:5px;
  }
  .footer small{
    font-size:12px;
    width:50%;
    color:#777;
    margin-left:28%;
    margin-bottom:10px;
  }

</style>
<style>
  .on{
    background:white !important;
  }
  .mint-swipe-items-wrap{
    padding-bottom:53%;
    position:relative;
  }
  .mint-swipe-item{
    width:100%;
  }
  .mint-swipe-indicators{
    left:68%;
  }

  .mint-swipe-indicator{
    width:5px;
    height:5px;
    margin-left:4px;
  }
  .f{
    width:100%;
    height:35px;
    position:absolute;
    bottom:0;
    background:rgba(0,0,0,0.3);
    color:whitesmoke;
    line-height:30px;
    padding-left:5px;
  }
  .mint-cell-title{
    flex:0;
  }
  .tab-btn{
    background:#eee;
  }
  .mint-button--default{
    background:#e6e6e6;
    margin:10px 2px 0;
  }
  .tab p{
    margin-left:10px;
    margin-right:10px;
    line-height:20px;
    color:black;
    font-size:14px;
  }
  .mint-cell-value>p{
    flex:1;
    color:#666;
  }
  .mint-cell-value>img{
    border-radius:10%;
    width:110px;
    height:90px;
    padding:10px 0;
  }
</style>
