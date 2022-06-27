const BASE_URL = 'http://localhost:8759';
const genUrl = (suffix: string) => BASE_URL + suffix;

export const SEARCH_URL = genUrl('/search');
export const VIDEO_INFO_URL = genUrl('/video-info');
