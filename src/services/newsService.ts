import { INewsResponse } from '@/interface/INews';

export interface FetchNewsOptions {
  type: string;
  page?: number;
  itemsPerPage?: number;
  from?: string;
  search?: string;
}

export async function fetchNews(options: FetchNewsOptions): Promise<INewsResponse> {
  const { type = 'noticia', page, itemsPerPage, from, search } = options;
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

  if (search) {
    url += `&busca=${search}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
