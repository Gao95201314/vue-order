<template>
  <div class="lv-city">

    <header>
      <i
        @click="goBack"
        class="iconfont icon-fanhui"
      ></i>
      当前城市-{{myCity}}
    </header>
    <!-- <SearchBar
      placeholder="Search"
      maxLength={8}
    /> -->
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content">
        <li
          v-for="(item1,index1) in pageCity"
          :key="index1"
          class="lv-indexsection"
        >
          <p
            class="lv-indexsection__index"
            :id="pageCity[index1].letter"
          >
            {{item1.letter}}
          </p>
          <ul>
            <li
              v-for="(item2,index2) in pageCity[index1].city"
              :key="index2"
              @click="changeCity(item2.name)"
            >
              {{item2.name}}
            </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item,index) in pageCity"
            @click="scrollToAnchor(pageCity[index].letter)"
            :key="index"
          >
            {{item.letter}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageCity: [],
      myCity: ""
    };
  },
  created() {},
  methods: {
    scrollToAnchor() {},
    changeCity() {},
    goBack() {}
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../styles/common/px2rem.scss";
.lv-city {
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

  .am-search {
    height: px2rem(50);
    background: #0085ff;
  }

  .am-search-input {
    height: px2rem(30);
  }
  .am-search-cancel {
    color: #fff;
  }
}

.lv-indexlist {
  flex: 1;
  height: 100%;
  display: flex;
  background: #fff;
  overflow: hidden;

  &__content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    width: 100%;
  }

  &__nav {
    width: px2rem(18);
    display: flex;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: px2rem(18);
    }

    li {
      height: px2rem(18);
      font-size: px2rem(12);
      color: #191a1b;
      padding: 0 px2rem(6);
    }
  }

  .lv-indexsection {
    font-size: px2rem(15);

    &__index {
      background-color: #f4f4f4;
      color: #797d82;
      padding-left: px2rem(15);
      height: px2rem(30);
      line-height: px2rem(30);
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0 px2rem(15);

      li {
        font-size: px2rem(15);
        position: relative;
        width: 33.33%;
        height: px2rem(48);
        line-height: px2rem(48);
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
        font-family: "微软雅黑";
        font-style: normal;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: px2rem(1);
          background: #ededed;
          transform: scaleY(0.5);
          overflow: hidden;
        }
      }
    }
  }
}
</style>
