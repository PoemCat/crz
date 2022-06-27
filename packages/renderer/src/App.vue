<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import NavBar from './components/navbar/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: { NavBar },
  setup() {
    const router = useRouter();
    router.push('/');
  },
});
</script>
