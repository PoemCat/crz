import nodeFetch from 'node-fetch';

// Language: typescript
// Path: src/main/api/bilibili/video.ts
// get bilibili video info by bvid
export async function getVideoInfo(bvid: string) {
  const url = `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
  const response = await nodeFetch(url);
  const json = await response.json() as any;
  return json.data;
}

export async function getVideoUrl(avid: string, cid: string, qn: number) {
  const url = `https://api.bilibili.com/x/player/playurl?cid=${cid}&avid=${avid}&otype=json&qn=${qn}`;
  const response = await nodeFetch(url);
  const json = await response.json() as any;
  return json.data;
}
