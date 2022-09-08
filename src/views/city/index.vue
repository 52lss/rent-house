<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="$router.push({ path: '/home' })"
      class="title"
    />
    <!-- 内容 -->
    <van-index-bar :index-list="indexList" highlight-color="#fff">
      <van-index-anchor class="hotcity" index="#">当前城市</van-index-anchor>
      <van-cell title="上海"></van-cell>
      <van-index-anchor class="hotcity" index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="item in hotCitys"
        :key="item.value"
        :title="item.label"
      ></van-cell>

      <van-index-anchor
        v-for="(item, index) in letters"
        :key="index"
        :index="item"
      >
        {{ item }}
        <van-cell
          class="location-city"
          v-for="(letter, index) in fileterCityList(item)"
          :key="index"
          >{{ letter.label }}
        </van-cell>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { cityAPI, getHotCityAPI } from '@/api/city'
export default {
  data() {
    return {
      citys: [],
      hotCitys: [],
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      letters: [
        'A',
        'B',
        'C',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'Q',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  created() {
    this.getCity()
    this.getHotCitys()
  },
  methods: {
    onClickLeft() {},
    // 获取所有城市
    async getCity() {
      try {
        const { data } = await cityAPI()
        console.log(data)
        this.citys = data.body
      } catch (err) {
        console.log(err)
      }
    },
    // 获取热门城市
    async getHotCitys() {
      try {
        const { data } = await getHotCityAPI()
        console.log(data)
        this.hotCitys = data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    fileterCityList() {
      // 把对应城市的大写首字母传进入 筛选出具有相同首字母的城市数组
      return (letter) => {
        return this.citys.filter(
          // 截取第一个字符串 并大写
          (item) => item.short.substr(0, 1).toUpperCase() === letter
        )
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.title {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 92px;
  background-color: #21b97a;
  z-index: 999;

  .van-nav-bar__content {
    .van-nav-bar__title {
      color: #fff;
      font-size: 36px;
    }
    .van-icon-arrow-left {
      color: #fff;
    }
  }
}
.van-index-bar {
  padding-top: 100px;
}
/deep/.van-index-anchor {
  color: #a2a2a2;
}
/deep/.van-index-bar__sidebar {
  height: calc(100% - 220px);
  margin-right: 20px;
  justify-content: space-between;
  .van-index-bar__index {
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    font-size: 28px;
  }
  .van-index-bar__index--active {
    background-color: #21b97a;
    border-radius: 20px;
  }
}
.location-city {
  padding-left: 0px;
}
</style>
