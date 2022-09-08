<template>
  <div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="(item, index) in list" :key="index">
        <template>
          <van-icon :name="item.name" />
          <p>{{ item.content }}</p>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
