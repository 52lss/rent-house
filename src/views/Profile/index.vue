<template>
  <div>
    <div class="pic">
      <img src="@/assets/imgs/bg.png" alt="" />
    </div>
    <div class="pannel" v-if="isShow">
      <div class="avatar">
        <img src="@/assets/imgs/avatar.png" alt="" />
      </div>
      <div class="detail">
        <p class="uname">游客</p>
        <van-button type="primary" to="/login" class="btn">去登录</van-button>
      </div>
    </div>
    <div class="login-pannel pannel" v-else>
      <div class="avatar">
        <img src="@/assets/imgs/avatar.png" alt="" />
      </div>
      <div class="detail">
        <p class="uname">{{ nickname }}</p>
        <van-button type="primary" to="/login" class="btn" @click="outLogin"
          >退出</van-button
        >
        <p class="personal" @click="$router.push({path:'/edit'})">编辑个人资料 ▶</p>
      </div>
    </div>
    <Grid :list="list"> </Grid>
    <div class="fotter-img">
      <img src="@/assets/imgs/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import Grid from '@/views/Profile/components/Grid.vue'
import { userInfoAPI } from '@/api/index'
export default {
  props: [],
  components: { Grid },
  data() {
    return {
      list: [
        { name: 'star-o', content: '我的收藏' },
        { name: 'wap-home-o', content: '我的出租' },
        { name: 'clock-o', content: '看房记录' },
        { name: 'send-gift-o', content: '成为房主' },
        { name: 'contact', content: '个人资料' },
        { name: 'service-o', content: '联系我们' }
      ],
      isShow: true,
      avatar: '',
      nickname: ''
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 请求用户信息
    async getUserInfo() {
      try {
        // 方法一 query 传参
        // 方法二 用vuex 传参
        // 方法三 通过vuex存储到本地 本地取数据
        const { data } = await userInfoAPI()
        console.log(data.body)
        this.isShow = false
        this.avatar = data.body.avatar
        this.nickname = data.body.nickname
      } catch (err) {
        console.log(err)
      }
    },
    // 退出登录
    outLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.pic {
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 60%;
  }
}

.pannel {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  width: 640px;
  height: 330px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  z-index: 999;
  .avatar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /deep/.detail {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 172px;
    text-align: center;
    font-size: 24px;
    .uname {
      margin-bottom: 30px;
      font-size: 26px;
    }
    .btn {
      width: 156px;
      height: 60px;
      background-color: #07c160;
      border: 0px;
      color: #fff;
      font-size: 24px;
      border-radius: 12px;
    }
    .personal {
      color: #999;
    }
  }
}

.fotter-img {
  padding: 0 4vw;
  width: 750px;
  height: 170px;
  img {
    height: 100%;
    width: 90vw;
  }
}
</style>
