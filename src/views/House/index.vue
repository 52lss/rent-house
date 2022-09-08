<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      show-action
      background="#4fc08d"
      placeholder="请输入小区或地址"
      @search="onSearch"
      class="search"
    >
      <template #action>
        <van-icon
          name="location-o"
          @click="onSearch"
          size="25"
          class="search-icon"
          @location="getlocation"
        />
      </template>
      <template #left>
        <div class="icon" @click="onClickLeft">
          <van-icon name="arrow-left" size="25" />
        </div>
      </template>
      <template #label>
        上海 <van-icon name="arrow-down" size="18" />
      </template>
    </van-search>
    <!-- 下拉菜单 -->
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item>
        <template #title> 区域 </template>
        <template #default> </template>
      </van-dropdown-item>
      <van-dropdown-item>
        <template #title> 方式 </template>
        <template #default> </template>
      </van-dropdown-item>
      <van-dropdown-item
        ><template #title> 租金 </template> <template #default> </template
      ></van-dropdown-item>
      <van-dropdown-item
        ><template #title> 租金 </template> <template #default> </template
      ></van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { infoAPI } from '@/api/home'

import { areaList } from '@vant/area-data'
export default {
  data() {
    return {
      value: '',
      areaList,
      show: false,
      id: '',
      location: ''
    }
  },
  created() {
    this.cityInfo()
  },
  methods: {
    // 获取城市信息
    onSearch() {},
    async cityInfo() {
      const { data } = await infoAPI({
        name: this.location
      })
      console.log(data)
      this.location = data.body.label
      this.id = data.body.value
    },
    // 回退到home
    onClickLeft() {
      this.$router.push({
        path: '/home/'
      })
    },
    getlocation() {}
  }
}
</script>

<style lang="less" scoped>
.van-search__action {
  color: #fff;
}
.van-icon-arrow-left {
  color: #fff;
  margin-right: 10px;
}
.van-search__action {
  margin-top: 6px;
  color: #fff;
}
</style>
