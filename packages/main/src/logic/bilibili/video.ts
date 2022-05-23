import * as API from '../../api/bilibili/video';

const supportFormats = [
  {
    quality: 116,
    format: 'flv_p60',
    description: '1080P 60帧',
  },
  {
    quality: 80,
    format: 'flv',
    description: '1080P 高清',
  },
  {
    quality: 64,
    format: 'flv720',
    description: '720P 高清',
  },
  {
    quality: 32,
    format: 'flv480',
    description: '480P 清晰',
  },
  {
    quality: 16,
    format: 'mp4',
    description: '360P 流畅',
  },
];

export async function getAllQuantityUrl(bvid: string) {
  const videoInfo = await API.getVideoInfo(bvid);
  const { aid, pic, pages } = videoInfo;
  const { cid } = pages[0];
  const supportQns = supportFormats.map((v) => v.quality);
  const result: Record<string, any> = {};
  const qualities: Record<string, any> = {};
  await Promise.all(
    supportQns.map(async (qn) => {
      const urlInfo = await API.getVideoUrl(aid, cid, qn);
      const { quality, format, durl } = urlInfo;
      const { url, size } = durl[0];
      const formatInfo = supportFormats.find((v) => v.quality === quality);
      qualities[quality] = {
        format: format,
        type: format === 'mp4' ? 'mp4' : 'flv',
        url: 'http://localhost:3001/video?url=' + encodeURIComponent(url),
        name: formatInfo?.description,
        size,
      };
    }),
  );
  result['quality'] = Object.values(qualities).reverse();
  result['pic'] = 'http://localhost:30001/image?url=' + encodeURIComponent(pic);
  result['defaultQuality'] = 0;
  return result;
}
