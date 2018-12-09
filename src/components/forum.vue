<template>
  <main>
    <div class="logo"><img src="../assets/image/logo.png" alt=""></div>
    <header>
      <mt-header title="">
        <router-link to="/login" slot="left">
          <mt-button icon="" width="60px;"><img src="../assets/image/ding.png" alt=""></mt-button>
        </router-link>
        <mt-button icon="" slot="right" @click="login()"><img src="../assets/image/more.png" alt="" slot="icon"></mt-button>
      </mt-header>
    </header>
    <div class="focu">
      <img src="../assets/image/weixinbanner.gif" alt="">
    </div>
    
    <div class="nav">
      <ul>
        <li>论坛</li>
        <li>导读</li>
        <li>抢沙发</li>
        <li>搜索</li>
      </ul>
    </div>
    <div class="area">
      <ul>
        <li>
          <div class="area-header">
            <p>车友活动区</p>
            <img src="../assets/image/down.png" alt="">
          </div>
          <div class="area-content">
            <ul>
              <li>
                <img src="../assets/image/a11.png" alt="">
                <p>新人报道区</p>
              </li>
              <li>
                <img src="../assets/image/a12.gif" alt="">
                <p>AA约伴活动</p>
              </li>
              <li>
                <img src="../assets/image/a13.png" alt="">
                <p>自行车竞赛</p>
              </li>
              <li>
                <img src="../assets/image/a14.png" alt="">
                <p>商业活动</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="area-header">
            <p>特色专区</p>
            <img src="../assets/image/down.png" alt="">
          </div>
          <div class="area-content">
            <ul>
              <li>
                <img src="../assets/image/a21.png" alt="">
                <p>骑行西藏</p>
              </li>
              <li>
                <img src="../assets/image/a22.png" alt="">
                <p>环海南岛</p>
              </li>
              <li>
                <img src="../assets/image/a23.png" alt="">
                <p>环青海湖</p>
              </li>
              <li>
                <img src="../assets/image/a24.jpg" alt="">
                <p>环台湾岛</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="area-header">
            <p>车友交流区</p>
            <img src="../assets/image/down.png" alt="">
          </div>
          <div class="area-content">
            <ul>
              <li>
                <img src="../assets/image/a31.gif" alt="">
                <p>车友大厅</p>
              </li>
              <li>
                <img src="../assets/image/a32.png" alt="">
                <p>旅行故事</p>
              </li>
              <li>
                <img src="../assets/image/a33.png" alt="">
                <p>骑行装备</p>
              </li>
              <li>
                <img src="../assets/image/a34.jpg" alt="">
                <p>视频分享</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="area-header">
            <p>地方论坛</p>
            <img src="../assets/image/down.png" alt="">
          </div>
          <div class="area-content">
            <ul>
              <li>
                <img src="../assets/image/a41.jpg" alt="">
                <p>B北京车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a42.png" alt="">
                <p>T天津车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a43.png" alt="">
                <p>S上海车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a44.png" alt="">
                <p>C重庆车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a45.png" alt="">
                <p>X新疆车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a46.jpg" alt="">
                <p>X西藏车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a47.png" alt="">
                <p>N内蒙古车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a48.png" alt="">
                <p>N宁夏车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a49.png" alt="">
                <p>G广西车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4a.jpg" alt="">
                <p>A安徽车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4b.jpg" alt="">
                <p>F福建车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4c.jpg" alt="">
                <p>G甘肃车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4d.jpg" alt="">
                <p>G广东车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4e.jpg" alt="">
                <p>G贵州车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4f.jpg" alt="">
                <p>H海南车友交流区</p>
              </li>

              <li>
                <img src="../assets/image/a4g.jpg" alt="">
                <p>H河北车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4h.jpg" alt="">
                <p>H河南车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4i.jpg" alt="">
                <p>H湖北车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4j.jpg" alt="">
                <p>H湖南车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4k.jpg" alt="">
                <p>H黑龙江车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4l.jpg" alt="">
                <p>J吉林车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4m.jpg" alt="">
                <p>J江苏车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4n.jpg" alt="">
                <p>J江西车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4o.jpg" alt="">
                <p>L辽宁车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4p.png" alt="">
                <p>Q青海车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4q.jpg" alt="">
                <p>S山东车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4r.jpg" alt="">
                <p>S山西车友交流区</p>
              </li>
              <li>
              <img src="../assets/image/a4s.jpg" alt="">
              <p>S陕西车友交流区</p>
            </li>
              <li>
                <img src="../assets/image/a4t.jpg" alt="">
                <p>S四川车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4u.jpg" alt="">
                <p>Y云南车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4v.jpg" alt="">
                <p>Z浙江车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4w.png" alt="">
                <p>X香港车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4x.png" alt="">
                <p>T台湾车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4y.png" alt="">
                <p>A澳门车友交流区</p>
              </li>
              <li>
                <img src="../assets/image/a4z.jpg" alt="">
                <p>国外车友交流区</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
        <div class="area-header">
          <p>自行车旅行资料区</p>
          <img src="../assets/image/down.png" alt="">
        </div>
        <div class="area-content">
          <ul>
            <li>
              <img src="../assets/image/a51.gif" alt="">
              <p>骑行圈车友之家住宿</p>
            </li>
            <li>
              <img src="../assets/image/a52.gif" alt="">
              <p>路线攻略/出行经验</p>
            </li>
            <li>
              <img src="../assets/image/a53.gif" alt="">
              <p>环保低碳/公益爱心</p>
            </li>
          </ul>
        </div>
      </li>
        <li>
          <div class="area-header">
            <p>管理中心</p>
            <img src="../assets/image/down.png" alt="">
          </div>
          <div class="area-content">
            <ul>
              <li>
                <img src="../assets/image/a71.gif" alt="">
                <p>论坛事务</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
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
  $('.area').click(function(){
    alert(111)
  })

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
  .logo{
    position:absolute;
    top:0;
    z-index:1;
    width:100px;
    left:50%;
    margin-left:-50px;
    text-align:center;
  }
  .logo img{
    height:40px;
  }
  .focu img{
    width:100%;
  }
  .nav{
    width:100%;
    height:48px;
    border:1px solid #eee;
  }
  .nav ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .nav ul li{
    float:left;
    width:24%;
    text-align:center;
    line-height:48px;
    font-size:14px;
    margin-left:2px;
  }
  .nav ul li:nth-of-type(1){
    border-bottom:1px solid #4078c0;
    color:#4078c0;
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
    left:40px;
    margin-top:-5px;
  }
  .area ul:after{
    content:'';
    display:block;
    clear:both;
  }
  .area-header{
    width:100%;
    height:48px;
    border-bottom:1px solid #eee;
  }
  .area-header>p{
    float:left;
    margin-left:10px;
    line-height:48px;
    font-size:16px;
  }
  .area-header>img{
    float:right;
    margin-right:15px;
    margin-top:18px;
  }
  .area-content ul li{
    float:left;
    width:47%;
    padding:5px;
    border-bottom:1px solid #eee;
  }
  .area-content ul li img{
    margin-left:5px;
    float:left;
  }
  .area-content ul li p{
    width:100px;
    margin-top:0;
    float:left;
    margin-left:10px;
    overflow: hidden;
    white-space: nowrap;
    /*font-size: 13px;*/
    text-overflow: ellipsis;
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
