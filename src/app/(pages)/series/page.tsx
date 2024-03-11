'use client';
import React, { useState, useEffect } from 'react';
import LayoutDefault from '@/app/LayoutDefault';
import Image from 'next/image';
import { INews } from '@/interface/INews';
import { fetchNews } from '@/services/newsService';
import ShowMoreNews from '@/components/ShowMoreNews';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import { useQuery } from 'react-query';

export default function Series() {
  const router = useRouter();
  const [seriesNews, setSeriesNews] = useState<INews[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 600;

  const { data, isLoading, isError, error, refetch } = useQuery(
    ['series', { type: 'noticia', page }],
    () => fetchNews({ type: 'noticia', page, itemsPerPage }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const totalPages = data?.totalPages || 0;

  useEffect(() => {
    if (data?.items) {
      const filteredNews = data.items.filter((newsItem) =>
        newsItem.editorias.includes('seriesespeciais')
      );

      if (page > 1) {
        setSeriesNews((prevNews) => [...prevNews, ...filteredNews]);
      } else {
        setSeriesNews(filteredNews);
      }
    }
  }, [data, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    refetch();
  };

  const handleNewsClick = (newsItem: INews) => {
    localStorage.setItem('selectedNewsItem', JSON.stringify(newsItem));
    router.push(`/series/${newsItem.id}`);
  };

  if (isError) {
    return <div>Error: {error as string}</div>;
  }

  if (isLoading || seriesNews?.length === 0) {
    return (
      <LayoutDefault>
        <Loading />
      </LayoutDefault>
    );
  }

  const renderNewsItem = (newsItem: INews) => (
    <div key={newsItem.id} className='group' onClick={() => handleNewsClick(newsItem)}>
      <div className='group-hover:text-blue-900 cursor-pointer'>
        <p className='text-2xl font-semibold'>{newsItem.titulo}</p>
        <p className='text-gray-600 text-md'>{newsItem.introducao}</p>
        <p className='text-gray-400 text-sm mt-1'>{newsItem.data_publicacao}</p>
      </div>
    </div>
  );

  return (
    <LayoutDefault>
      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-2'>
          <div className='bg-white cursor-pointer mb-6 relative overflow-hidden'>
            <div className='group' onClick={() => handleNewsClick(seriesNews[0])}>
              <Image
                src={`https://agenciadenoticias.ibge.gov.br/${
                  JSON.parse(seriesNews[0].imagens).image_fulltext
                }`}
                alt={seriesNews[0].titulo}
                layout='responsive'
                width={600}
                height={400}
                objectFit='cover'
                className='transition-transform duration-500 ease-in-out transform hover:scale-105'
              />

              <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white'>
                <div className='text-xl lg:text-3xl md:text-xxl sm:text-xl xs:text-sm max-w-full font-semibold'>
                  {seriesNews[0].titulo}
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-6 flex-col mb-8'>
            {seriesNews.slice(1, 4).map((newsItem, index) => (
              <React.Fragment key={index}>
                <div className='group' onClick={() => handleNewsClick(newsItem)}>
                  <div className='group-hover:text-blue-900 cursor-pointer'>
                    <p className='text-2xl font-semibold'>{newsItem.titulo}</p>
                    <p className='text-gray-600 text-md'>{newsItem.introducao}</p>
                    <p className='text-gray-400 text-sm'>{newsItem.data_publicacao}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {seriesNews.slice(4).map((news, index) => (
            <React.Fragment key={index}>{renderNewsItem(news)}</React.Fragment>
          ))}
        </div>
      </section>

      <ShowMoreNews currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </LayoutDefault>
  );
}
