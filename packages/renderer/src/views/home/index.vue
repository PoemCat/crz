<template>
  <div class="liz-search">
    <div v-if="!hasSearch" class="liz-search__wrapper home">
      <el-input v-model="keywords" />
      <el-button type="primary" @click="clickSearch"> 搜索 </el-button>
    </div>
    <div v-else class="liz-search__wrapper search">
      <ul class="result-list">
        <li v-for="dv in searchResult" :key="dv.bvid" class="result-item">
          <video-card :value="dv" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import VideoCard from './components/VideoCard/index.vue';
import { search } from '../../api/search';

export default defineComponent({
  name: 'HomePage',
  components: { VideoCard },
  setup() {
    const isLoading = ref(false);
    const searchResult = ref<any>([]);
    const hasSearch = computed(() => {
      return searchResult.value.length > 0;
    });

    const keywords = ref('');
    const clickSearch = async () => {
      const opts = {
        keyword: keywords.value,
      };
      const { data } = await search(opts);
      const result = data.result;
      console.log(result);
      if (result && result.length) {
        const videoResult = result.find((v: {result_type: string}) => v.result_type === 'video');
        console.log(videoResult);
        if (videoResult) {
          searchResult.value = videoResult.data;
        }
      }
    };
    return { isLoading, keywords, clickSearch, hasSearch, searchResult };
  },
});
</script>
<style lang="scss" scoped>
.liz-search {
  .liz-search__wrapper {
    &.home {
      height: 30px;
      display: flex;
      align-items: center;
    }
  }
}

.result-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
