import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';

//根据设备宽度，修改根元素html的大小，以适配不一样终端。配置可伸缩布局方案，主要是将1rem设为viewWidth/10。
import 'amfe-flexible'; 

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
