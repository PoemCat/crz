export const fetchVideoInfo = async (bvid: string) => {
  const url = 'http://localhost:30001/video-info?bvid=' + bvid;
  const resp = await fetch(url);
  return resp.json();
};
