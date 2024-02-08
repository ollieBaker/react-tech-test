import { BeerObject, IPage } from '../types/types';
//Simple implementation of API response caching
const apiCache = {};

const fetchWithErrorHandling = async (url) => {
  if (apiCache.hasOwnProperty(url)) {
    console.log('returning data from cache');
    return apiCache[url];
  }

  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('An Api error occurred');
  }

  const data = await response.json();
  apiCache[url] = data;
  return data;
};

export async function getBeersByPage({
  page,
  pageSize,
}: IPage): Promise<Array<BeerObject>> {
  try {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${
      pageSize || 10
    }`;
    const data = await fetchWithErrorHandling(url);

    return data;
  } catch (error) {
    return null;
  }
}

export async function getBeerById({
  id,
}: {
  id: number | string;
}): Promise<BeerObject> {
  try {
    const url = `https://api.punkapi.com/v2/beers/${id}`;
    const data = await fetchWithErrorHandling(url);

    return data[0];
  } catch {
    return null;
  }
}
