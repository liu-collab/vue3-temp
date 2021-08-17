import { createApp } from 'vue';
import 'normalize.css'
import './assets/css/index.less'
//import './service/axios-demo'
//全局引入
// import ElementPlus from 'element-plus'
// import "element-plus/lib/theme-chalk/index.css"

//import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue';
import router from './router';
import store from './store';
import { globalRegister } from './global'

import Request from './service'
const app = createApp(App)
//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app');

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// Request.request({
//   url: "/home/multidata",
//   method: 'GET',
//   interceptors: {
//     requestInterceptors: config => {
//       console.log("单独的拦截请求")
//       return config
//     },
//     responseInterceptors: res => {
//       console.log("单独的响应请求")
//       return res
//     }
//   },
//   showLoading: false
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

Request.get<DataType>({
  url: "/home/multidata",


}).then(res => {
  console.log(res.data)
  console.log(res.returnCode)
  console.log(res.success)

}).catch(error => {
  console.log(error)
})
