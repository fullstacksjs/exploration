export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => {
    return res.ok
      ? res.json()
      : res.json().then((json) => {
          throw json;
        });
  });
