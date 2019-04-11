<template>
  <div class="lv-cityDetail">
    <header>
      <i
        class="iconfont icon-fanhui"
        @click="goBack()"
      ></i>
      选择收货地址
    </header>
    <div class="search">
      <div
        class="city"
        @click="goCity()"
      >{{curCity}} ∨</div>
      <!-- <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索"
      >
      </mt-search> -->
    </div>
    <ul class="all-cinemas">
      <li
        class="cinemas-list-item"
        v-for="(item,index) in list"
        :key="index"
        @click="goBack(item.short_address)"
      >
        <div class="cinema-info-lf cinema-info">
          <p class="cinema-name">{{item.name}}</p>
          <p class="cinema-address">{{item.address}}</p>
        </div>
        <div class="cinema-info-rt cinema-info">
          {{item.distance}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import date from "../api/cityDetail.json";
import {} from "mint-ui";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: "",
      value: ""
    };
  },
  created() {
    this.getInfoList();
  },
  //从vuex里面获取城市
  computed: {
    ...mapState(["curCity"])
  },
  methods: {
    //跳转到选择城市页面
    goCity() {
      this.$router.push({ name: "city" });
    },
    //页面改变城市信息，触发vuex里面changeCity的方法改变state里面城市信息
    ...mapMutations(["changeCity"]),
    //返回首页
    goBack(name) {
      this.$router.push({ name: "home" });
    },
    //获取数据
    getInfoList() {
      this.list = date;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../styles/common/px2rem.scss";
.lv-cityDetail {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  header {
    height: px2rem(44);
    background: #fff;
    text-align: center;
    line-height: px2rem(44);
    font-size: px2rem(17);
    background: #0085ff;
    color: #fff;

    i {
      position: absolute;
      left: px2rem(15);
      font-size: px2rem(25);
    }
  }

  .search {
    height: px2rem(56);
    position: relative;
    background: #fff;

    .city {
      height: px2rem(56);
      position: absolute;
      width: px2rem(60);
      top: 0;
      left: 0;
      text-align: center;
      line-height: px2rem(56);
      font-size: px2rem(14);
    }
    .am-search-value {
      height: 100%;
    }
    .am-search {
      height: px2rem(56);
      margin-left: px2rem(56);
      background: #fff;
    }

    .am-search-input {
      height: px2rem(36);
      background: #f4f4f4;
    }
  }

  .all-cinemas {
    flex: 1;
    height: 100%;
    overflow: scroll;
    .cinemas-list-item {
      border-bottom: px2rem(1) solid #ededed;
      height: px2rem(75);
      background-color: #fff;
      padding: px2rem(15);
      .cinema-info {
        float: left;
        .cinema-name {
          color: #191a1b;
          font-size: px2rem(15);
          margin-top: px2rem(6);
        }
        .cinema-address {
          color: #797d82;
          font-size: px2rem(12);
          margin-top: px2rem(5);
          width: px2rem(265);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .cinema-info-rt {
        float: right;
        font-size: px2rem(14);
        margin-top: px2rem(16);
      }
    }
  }
}
</style>
