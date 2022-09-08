<template>
  <div>
    <van-nav-bar title="账号登录" />
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="userFormRules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="userFormRules.password"
      />
      <div>
        <van-button block type="info" native-type="submit" class="submit-btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <router-link to="/" @click="register">还没账号去注册哦</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/index'
import { userFormRules } from '@/views/Login/rules'
export default {
  data() {
    return {
      username: '',
      password: '',
      userFormRules
    }
  },
  methods: {
    loading() {
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '登录中'
      })
    },
    async onSubmit() {
      // 1.获取表单数据
      this.loading()
      // 2.表单验证
      // 设置登录提示
      // this.loading()
      // 3，提交表单登录
      try {
        const { data } = await loginAPI(this.username, this.password)
        console.log(data.body.token)
        // 跳转路由
        this.$router.push({
          path: '/home/profile'
          // 方法一 query传参
          // query: {
          //   token: data.body.token
          // }
        })
        // token令牌存储
        // 1.通过$store.commit把token数据存到vuex的mutation中改变state
        // $store.commit（方法名，值）
        // 2.在utils 里面的storage封装本地存储
        // 3.在store index.js里面 引入本地存储 把token数据进行存储
        this.$store.commit('setUser', data.body.token)

        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.success('传入内容参数缺失')
        } else if (err.response.status === 404) {
          this.$toast.success('请求接口不存在')
        }
      }
    },
    register() {
      this.$router.push({
        path: '/profile'
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar {
  background-color: #21b97a;
}
/deep/.van-nav-bar__title {
  font-size: 36px !important;
  color: #fff !important;
}
/deep/input.van-field__control {
  font-size: 34px;
  font-weight: normal;
  background: transparent !important;
}
.van-button {
  background-color: #21b97a;
  border: 0px;
}

.van-cell {
  font-weight: 400;
  font-size: 36px;
  padding: 50px 40px;
  color: #d3c9cc;
}
.submit-btn {
  width: 90%;
  height: 100px;
  font-size: 36px;
  margin: 40px auto;
}
.register {
  margin-top: 100px;
  text-align: center;
}
a {
  display: block;
  color: #666;
  text-align: center;
  font-size: 28px;
}
</style>
