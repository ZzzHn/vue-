<template>
  <div class="banner">
    <ul class="clearfix">
      <li><img src="../assets/images/2123447224405320343.jpg" alt style="padding-top:32px"/>
        <div class="text-box">
          <h2>嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤</h2>
        </div>
      </li>
      <li><img src="../assets/images/i2.jpg" alt style="padding-top:32px"/>
        <div class="text-box">
          <h2>嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤</h2>
        </div>
      </li>
      <li><img src="../assets/images/i3.jpg" alt style="padding-top:32px"/>
        <div class="text-box">
          <h2>嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤</h2>
        </div>
      </li>
      <li><img src="../assets/images/i1.jpg" alt style="padding-top:32px"/>
        <div class="text-box">
          <h2>嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤</h2>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  mounted(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style scoped>
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1rem; position:absolute; left:0; bottom:0; color:white; background:rgba(0,0,0,.3);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>
