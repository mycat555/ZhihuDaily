import Vue from 'vue'
import Root from './Root.vue'
import { router } from './routers'
import store from './vuex/store.js'

// 将首页日报列表返回的日期字符串转成"XXXX年XX月XX日"这样的日期格式
Vue.filter("formatDate", function (value) {
  var middleState = value.split("");
  middleState.splice(4,0,"年");
  middleState.splice(7,0,"月")
  middleState.splice(middleState.length,0,"日")
  var middleState2 = middleState.toString().replace(/,/g,'')
  return middleState2
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Root/>',
  components: { Root },
  router,
  store
})
