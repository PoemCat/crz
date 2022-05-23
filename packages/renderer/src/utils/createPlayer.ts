import DPlayer from 'dplayer';
export default function createPlayer(
  el: HTMLDivElement | null,
  video: any,
) {
  const mediaDataSource = {};
  return new DPlayer({
    container: el,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    video,
    pluginOptions: {
      flv: {
        mediaDataSource,
      },
    },
  });
}
