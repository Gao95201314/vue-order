//1.引入Vue
import Vue from 'vue';
//2.引入vuex
import Vuex from 'vuex';
import { Toast } from 'mint-ui';
//3.use
Vue.use(Vuex);

//实例化store对象
const store = new Vuex.Store({
  //一个仓库中有哪些东西
  //状态：放置整个项目中所有能够全局共用的状态
  state: {
    curCity: '深圳',
    myLove: '美国电影',
    //购物车数据
    filmsCard: localStorage.getItem('filmsCard') ? JSON.parse(localStorage.getItem('filmsCard')) : [],
  },
  //对当前的state里面某个一个状态做派生。类似计算属性
  getters: {
    //计算所有电影价格
    getTotalPrice(state) {
      let allPrice = 0;
      state.filmsCard.forEach(item => {
        allPrice += item.filmNum * item.filmPrice;
      })
      return allPrice;
    },
  },
  //唯一能够修改state状态的东西。同步操作
  mutations: {
    /**
     * 修改 当前定位的城市
     * @param {Object} state 就是当前 store实例的 state 属性
     * @param {Object} payload 参数 负载
     */
    // 添加电影
    addFilm(state, payload) {
      let filmId = payload.filmId;
      let index = -1;
      let isZai = state.filmsCard.some((item, i) => {
        if (item.filmId === filmId) {
          index = i;
          return true;
        }
        return false;
      });
      let userphone = localStorage.getItem('userphone');
      if (userphone) {
        if (isZai) {
          state.filmsCard[index].filmNum++;
        } else {
          state.filmsCard.push({
            filmId: payload.filmId,
            filmName: payload.name,
            filmPrice: Math.floor(Math.random() * 20) + 20,
            filmNum: 1
          });
        }
        //最后将数据写入到localsrorage
        localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
      } else {
        Toast({
          message: '请登录',
          duration: 1000
        });
      }
    },
    /**
     * 删除购物车
     * @param {*} state
     * @param {*} payload
     */
    reduceFilm(state, payload) {
      let index = -1;
      state.filmsCard.forEach((item, i) => {
        if (payload.filmId === item.filmId) {
          index = i;
        }
      })
      // 判断是否有
      if (index > -1) {
        // 大于才是有
        let film = state.filmsCard[index];
        if (film.filmNum > 1) {
          // 减一
          film.filmNum--;
        } else {
          // 删除
          state.filmsCard.splice(index, 1);
        }
      }
      //最后将数据写入到localsrorage
      localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
    },
    changeCity(state, payload) {
      state.curCity = payload;
    }
    //删除单个电影
    /* delSingle(state, payload) {
        let filmId = payload.filmId;
        let index = -1;
        state.filmsCard.forEach((item, i) => {
            if (item.filmId === filmId) {
                index = i;
            }
        });
        if (index > -1) {
            state.filmsCard.splice(index, 1);
        }
        localStorage.setItem('filmsCard', JSON.stringify(state.filmsCard));
    } */
  },
  //做异操作的时候要用到
  actions: {

  },
  //对store做拆分，拆分成一个一个的小store
  modules: {

  }
})
//4.暴露出store实例对象
export default store;
