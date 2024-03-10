import { INewsResponse } from '@/interface/INews';

interface FetchNewsOptions {
  type: string;
  page?: number;
  itemsPerPage?: number;
  from?: string;
}

export async function fetchNews(options: FetchNewsOptions): Promise<INewsResponse> {
  const { type = 'noticia', page, itemsPerPage, from } = options;
  let url = `http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=${type}`;

  if (page) {
    url += `&page=${page}`;
  }

  if (itemsPerPage) {
    url += `&qtd=${itemsPerPage}`;
  }

  if (from) {
    url += `&de=${from}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
