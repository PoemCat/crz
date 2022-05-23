export function qs(params: Record<string, any>) {
  return Object.entries(params)
    .map(([key, val]) => `${key}=${val ? encodeURIComponent(val) : ''}`)
    .join('&');
}
