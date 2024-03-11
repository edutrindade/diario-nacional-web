'use client';
import React, { useEffect, useState } from 'react';
import { INews } from '@/interface/INews';
import Image from 'next/image';
import LayoutDefault from '@/app/LayoutDefault';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';

const NewsSearchPage = () => {
  const router = useRouter();
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    const storedNews = localStorage.getItem('news');
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    }
  }, []);

  const handleNewsClick = (newsItem: INews) => {
    localStorage.setItem('selectedNewsItem', JSON.stringify(newsItem));
    router.push(`/news/${newsItem.id}`);
  };

  const renderNewsItem = (newsItem: INews) => (
    <div className='group' onClick={() => handleNewsClick(newsItem)}>
      <div className='group-hover:text-blue-900 cursor-pointer'>
        <p className='text-2xl font-semibold'>{newsItem.titulo}</p>
        <p className='text-gray-600 text-md'>{newsItem.introducao}</p>
      </div>
    </div>
  );

  if (!news || news.length === 0) {
    return <Loading />;
  }

  return (
    <LayoutDefault>
      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-2'>
          <div className='bg-white cursor-pointer mb-6 relative overflow-hidden'>
            <div className='group' onClick={() => handleNewsClick(news[0])}>
              <Image
                src={`https://agenciadenoticias.ibge.gov.br/${
                  JSON.parse(news[0].imagens).image_fulltext
                }`}
                alt={news[0].titulo}
                layout='responsive'
                width={600}
                height={400}
                objectFit='cover'
                className='transition-transform duration-500 ease-in-out transform hover:scale-105'
              />
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white'>
                <div className='text-xl lg:text-3xl md:text-xxl sm:text-xl xs:text-sm max-w-full font-semibold'>
                  {news[0].titulo}
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-6 flex-col mb-8'>
            {news.slice(1, 4).map((newsItem, index) => (
              <React.Fragment key={index}>
                {renderNewsItem(newsItem)}
                {index < 2 && <div className='border-b border-gray-300'></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {news.slice(4).map((news, index) => (
            <div key={index} className='bg-white cursor-pointer'>
              <div className='group' onClick={() => handleNewsClick(news)}>
                <Image
                  src={`https://agenciadenoticias.ibge.gov.br/${
                    JSON.parse(news.imagens).image_fulltext
                  }`}
                  alt={news.titulo}
                  layout='responsive'
                  width={300}
                  height={200}
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out transform group-hover:scale-105'
                />
                <div className='py-2 group-hover:text-blue-900'>
                  <h3 className='text-xl font-semibold mb-2'>{news.titulo}</h3>
                  <p className='text-gray-600'>{news.data_publicacao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LayoutDefault>
  );
};

export default NewsSearchPage;
