<template>
  <div>
    商品详情页面
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopSid: ""
    };
  },
  created() {
    if (this.$route.params.id) {
      this.shopSid = this.$route.params.id;
    }
  },
  methods: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/common/px2rem.scss";
</style>
