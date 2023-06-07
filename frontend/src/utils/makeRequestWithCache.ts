import { axios } from "@/lib";

export async function makeRequestWithCache(url: string, expirationTime: number) {
  const cacheResponse = localStorage.getItem(url);
  if (cacheResponse) {
    const { data, timestamp } = JSON.parse(cacheResponse);
    if (Date.now() - timestamp < expirationTime) {
      return data;
    }
  }

  const response = await axios.get(url);

  localStorage.setItem(
    url,
    JSON.stringify({
      data: response.data,
      timestamp: Date.now(),
    }),
  );

  return response.data;
}
