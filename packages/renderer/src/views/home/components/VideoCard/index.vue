<template>
  <div class="video-card" @click="clickVideoCard">
    <div class="video-card__image">
      <el-image class="image-wrapper" :src="realSrc" />
    </div>
    <div class="video-card__info">
      <h3 v-html="value?.title" />
      <div class="up-info">
        <div class="up-text">{{ value?.author }}</div>
        <div class="pub-time">{{ formatTime(value?.pubdate) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  props: {
    value: {
      type: Object,
      default: () => Object.create(null),
    },
    type: {
      type: String,
      default: 'bilibili',
    },
  },
  setup(props) {
    const router = useRouter();
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { type, value } = props;
    const loaded = ref(false);
    const imageSrc = type === 'bilibili' ? 'https:' + value?.pic : '';
    const clickVideoCard = () => {
      console.log('/video?bvid=' + value?.bvid);
      router.push('/video?bvid=' + value?.bvid);
    };
    const realSrc =
      'http://localhost:30001/image?url=' + encodeURIComponent(imageSrc);
    const formatTime = (time: number) => {
      const unixTime = time * 1000;
      return new Date(unixTime).toLocaleDateString();
    };
    return { realSrc, clickVideoCard, loaded, formatTime };
  },
});
</script>
<style>
:root {
  --title-font-size: 14px;
  --title-line-height: 22px;
  --subtitle-font-size: 13px;
  --subtitle-line-height: 16px;
  --info-margin-top: 8px;
  --avatar-size: 36px;
  --avatar-margin-right: 8px;
  --icon-size: 18px;
  --title-padding-right: 16px;
}
</style>
<style lang="scss" scoped>
.video-card {
  width: 235px;
  height: 210px;
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  cursor: pointer;
  .video-card__image {
    margin-bottom: 10px;
  }
}

.image-wrapper {
  width: 235px;
  height: 132px;
}

h3 {
  display: -webkit-flex;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-word !important;
  word-break: break-all;
  line-break: anywhere;
  -webkit-line-clamp: 2;
  padding-right: var(--title-padding-right);
  font-size: var(--title-font-size);
  line-height: var(--title-line-height);
  height: calc(2 * var(--title-line-height));
  color: var(--text1);
  transition: color 0.2s linear;
}

.up-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  color: #666;

  .up-text {
    min-width: 0;
    flex: 1;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: -o-ellipsis-lastline;
    text-overflow: ellipsis;
    word-break: break-word !important;
    word-break: break-all;
    line-break: anywhere;
    -webkit-line-clamp: 1;
  }

  .pub-time {
    margin-left: 4px;
  }
}
</style>
