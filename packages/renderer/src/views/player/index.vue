<template>
  <div class="crz-player">
    <div id="dplayer" ref="video" class="video-wrapper" />
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import createPlayer from '../../utils/createPlayer';
import { fetchVideoInfo } from '../../api/video';

export default {
  name: 'VideoPlayer',
  props: {
    bvid: {
      type: String,
      default: '',
    },
  },
  setup(props: any) {
    const src = ref('');
    const inputSrc = ref('');
    const video = ref(null);
    onMounted(async () => {
      const result = await fetchVideoInfo(props.bvid);
      console.log(result);
      const dp = createPlayer(video.value, result);
      dp.play();
    });

    return { src, inputSrc, video };
  },
};
</script>
