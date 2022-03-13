import {
  ResponseData,
} from '../types';

export async function fetchPeopleJSON(url: RequestInfo): Promise<ResponseData> {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;

    throw new Error(message);
  }

  return response.json();
}
