import { createApp } from 'vue';
import 'normalize.css';
import './assets/css/index.less';
//import './service/axios-demo'
//全局引入
// import ElementPlus from 'element-plus'
// import "element-plus/lib/theme-chalk/index.css"

//import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue';
import router from './router';
import store from './store';
import { globalRegister } from './global';

//import Request from './service'
const app = createApp(App);
//globalRegister(app)
app.use(globalRegister);
app.use(router);
app.use(store);

app.mount('#app');

//环境变成查看
//console.log(process.env.VUE_APP_BASE_URL)
//console.log(process.env.VUE_APP_BASE_NAME)

//网络请求
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// Request.get<DataType>({
//   url: "",

// }).then(res => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)

// }).catch(error => {
//   console.log(error)
// })
