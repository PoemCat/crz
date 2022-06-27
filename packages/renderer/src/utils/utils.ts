export function sleep(ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now());
    }, ms);
  });
}
