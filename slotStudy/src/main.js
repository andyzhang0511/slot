// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import father from './father'

// 公共样式
import '@/assets/style/reset.css'

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { father },
    template: '<father/>'
})