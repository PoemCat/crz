import fetch from 'node-fetch';
import qs from 'qs';

interface SearchParam {
  page?: number;
  page_size?: number;
  keyword: string;
  platform?: string;
}

export default {
  async search(params: SearchParam) {
    params.platform = params.platform || 'pc';
    params.page = params.page || 1;
    params.page_size = params.page_size || 42;
    const url = `https://api.bilibili.com/x/web-interface/search/all/v2?${qs.stringify(
      params,
    )}`;
    const response = await fetch(url);
    return response.json();
  },
};
