import { createApp } from 'vue';
import App from '/@/App.vue';
import index from './routers';
import ElementUI from 'element-plus';
import '../assets/styles/index.scss';
import 'element-plus/dist/index.css';

createApp(App).use(index).use(ElementUI).mount('#app');
