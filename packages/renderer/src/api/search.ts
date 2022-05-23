import { qs } from '../utils/api';

interface SearchParam {
  page?: number;
  page_size?: number;
  keyword: string;
  platform?: string;
}

export const search = async ( params: SearchParam ) => {
  const url = 'http://localhost:30001/search?' + qs(params);
  const resp = await fetch(url);
  return resp.json();
};
