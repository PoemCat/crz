import { createRouter, createWebHashHistory } from 'vue-router';
const index = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/home/index.vue'),
      meta: {
        title: '首页',
      },
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/player/index.vue'),
      props: (route) => {
        return { bvid: route.query.bvid };
      },
      meta: {
        title: '播放器',
      },
    },
  ],
});

export default index;
