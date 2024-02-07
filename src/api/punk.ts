import { BeerObject, IPage } from '../types/types';

const fetchWithErrorHandling = async (url) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error('An Api error occurred');
  }

  return await response.json();
};

export async function getBeersByPage({
  page,
  pageSize,
}: IPage): Promise<Array<BeerObject>> {
  try {
    const data = await fetchWithErrorHandling(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize || 10}`
    );

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
    const data = await fetchWithErrorHandling(
      `https://api.punkapi.com/v2/beers/${id}`
    );

    return data[0];
  } catch {
    return null;
  }
}
