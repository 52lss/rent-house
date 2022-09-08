<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar  active-color='#21b994' inactive-color="#000" route class="nav-tabbar">
      <van-tabbar-item  to="/home/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/home/house" icon="search">找房</van-tabbar-item>
      <van-tabbar-item  to="/home/message" icon="friends-o"
        >咨询</van-tabbar-item
      >
      <van-tabbar-item  to="/home/profile" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang='less' scoped>
.box {
  color:#21b994
}
/deep/.nav-tabbar {
  width: 750px;
}
</style>
