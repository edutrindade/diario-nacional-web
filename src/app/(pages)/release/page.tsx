'use client';
import React, { useState, useEffect } from 'react';
import LayoutDefault from '@/app/LayoutDefault';
import Image from 'next/image';
import { INews } from '@/interface/INews';
import { fetchNews } from '@/services/newsService';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
import PaginationMobile from '@/components/PaginationMobile';

export default function Releases() {
  const router = useRouter();
  const [releases, setReleases] = useState<INews[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const itemsPerPage = 36;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 560);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsResponse = await fetchNews({ type: 'release', page, itemsPerPage });
        setTotalPages(newsResponse.totalPages);

        console.log('news:', newsResponse);

        setReleases(newsResponse.items);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    loadNews();
  }, [page]);

  const renderNewsItem = (newsItem: INews) => (
    <div key={newsItem.id} className='group' onClick={() => handleNewsClick(newsItem)}>
      <div className='group-hover:text-blue-900 cursor-pointer'>
        <p className='text-2xl font-semibold'>{newsItem.titulo}</p>
        <p className='text-gray-600 text-md'>{newsItem.introducao}</p>
        <p className='text-gray-400 text-sm mt-1'>{newsItem.data_publicacao}</p>
      </div>
    </div>
  );

  if (releases.length === 0) {
    return <Loading />;
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleNewsClick = (newsItem: INews) => {
    localStorage.setItem('selectedNewsItem', JSON.stringify(newsItem));
    router.push(`/release/${newsItem.id}`);
  };

  return (
    <LayoutDefault>
      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {releases.map((news, index) => (
            <React.Fragment key={index}>{renderNewsItem(news)}</React.Fragment>
          ))}
        </div>
      </section>

      {isSmallScreen ? (
        <PaginationMobile
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </LayoutDefault>
  );
}
