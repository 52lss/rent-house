<template>
  <div>
    <div class="top">
      <!-- 轮播图 -->
      <div class="swiper">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <img v-lazy="`${baseURL}${item.imgSrc}`" class="swiper-img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 搜索框 -->
      <van-search
        v-model="value"
        show-action
        placeholder="请输入小区或地址"
        @click="$router.push('/city')"
        class="search"
      >
        <template #action>
          <van-icon
            name="location-o"
            @click="onSearch"
            size="25"
            class="search-icon"
          />
        </template>
        <template #label>
          {{ location }}<van-icon name="arrow-down" size="18"  @click="$router.push({path:'/city'})"/>|
        </template>
      </van-search>
    </div>
    <!-- 导航栏 -->
    <van-grid :border="false" class="grid">
      <van-grid-item text="整租">
        <template>
          <img src="@/assets/imgs/1.png" alt="" />
          <p>整租</p>
        </template>
      </van-grid-item>
      <van-grid-item text="合租">
        <img src="@/assets/imgs/2.png" alt="" />
        <p>合租</p>
      </van-grid-item>
      <van-grid-item text="地图找房">
        <img src="@/assets/imgs/3.png" alt="" />
        <p>地图找房</p>
      </van-grid-item>
      <van-grid-item text="去出租"
        ><img src="@/assets/imgs/4.png" alt="" />
        <p>去出租</p></van-grid-item
      >
    </van-grid>
    <!--租房小组  -->
    <van-grid :border="false" class="rent-house">
      <van-cell class="van-cell">
        <div class="van-cell-title" style="font-weight: 700">租房小组</div>
        <div class="van-cell-value">更多</div>
      </van-cell>
      <div v-for="item in rentList" :key="item.id" class="rent-house-content">
        <div class="content-box">
          <img :src="`${baseURL}${item.imgSrc}`" />
          <div class="text">
            <p>{{ item.desc }}</p>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </van-grid>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { swiperAPI, groupsAPI, infoAPI } from '@/api/home'
export default {
  data() {
    return {
      images: [],
      baseURL: 'http://liufusong.top:8080',
      value: '',
      id: '',
      rentList: [],
      location: ''
    }
  },
  created() {
    this.swiper()
    this.groups()
    this.cityInfo()
  },
  methods: {
    async swiper() {
      try {
        const { data } = await swiperAPI()
        // console.log(data.body)
        this.images = data.body
      } catch (err) {
        console.log(err)
      }
    },
    onSearch(val) {
      Toast(val)
    },
    async groups() {
      const id = this.id
      try {
        const { data } = await groupsAPI(id)
        console.log(data)
        this.rentList = data.body
      } catch (err) {
        console.log(err)
      }
    },
    async cityInfo() {
      const { data } = await infoAPI({
        name: this.location
      })
      console.log(data)
      this.location = data.body.label
      this.id = data.body.value
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  position: relative;
  .swiper {
    position: relative;
    .swiper-img {
      width: 100%;
    }
  }
  .search {
    position: fixed;
    top: 60px;
    height: 34px;
    width: 100%;
    background-color: transparent;
    z-index: 999;
    /deep/.van-field__left-icon {
      margin-right: 30px;
    }
  }
  .van-search__action {
    margin-top: 12px;
    color: #fff;
  }
  .van-icon-arrow-down {
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    margin: 0 8px;
  }
}
.grid img {
  width: 120px;
  height: 120px;
}
.grid p {
  font-size: 28px;
  color: #333;
}
.box-img {
  text-align: center;
  font-size: 12px;
}

/deep/.rent-house {
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  .van-cell__value--alone {
    display: flex;
    .van-cell-value {
      flex: 1;
      text-align: right;
    }
    .van-cell-titel {
      flex: 1;
      font-weight: 700;
    }
  }

  .rent-house-content {
    flex-basis: 50% !important;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &:nth-child(4) {
      margin-top: 20px;
    }
    &:nth-child(5) {
      margin-top: 20px;
    }
    .content-box {
      display: flex;
      width: 100%;
      height: 120px;
      align-items: center;
      justify-content: space-around;

      img {
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 28px;
        margin: 0;
      }
    }
  }
}
</style>
