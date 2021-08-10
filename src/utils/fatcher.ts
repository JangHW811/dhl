export const fetcher = (args: RequestInfo) => {
  console.log('args', args);
  return fetch(args).then((res) => res.json());
};
