'use client';
import React, { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Input from './Input';
import { useQuery } from 'react-query';
import { fetchNews } from '@/services/newsService';
import { INews } from '@/interface/INews';
import Alert from './Alert';

const Header = () => {
  const router = useRouter();
  const [news, setNews] = useState<INews[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [showAlert, setShowAlert] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  const { data, isLoading, refetch } = useQuery(
    ['search', { type: 'noticia' }],
    () => fetchNews({ type: 'noticia', search: searchQuery }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearch = () => {
    if (!searchQuery || searchQuery.length < 3) {
      setShowAlert(true);
      return;
    }
    localStorage.removeItem('news');
    refetch();
  };

  useEffect(() => {
    if (data?.items && data?.items.length > 0) {
      const search = searchQuery.toLowerCase();
      setSearchQuery('');
      console.log('data', data);
      localStorage.setItem('news', JSON.stringify(data.items));
      router.push(`/news/search/${search}`);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
  }, [data?.items]);

  setTimeout(() => {
    if (showAlert) setShowAlert(false);
    if (noResults) setNoResults(false);
  }, 2000);

  return (
    <>
      <header className='flex justify-between items-center py-4 px-1 bg-white'>
        {!isSmallScreen && (
          <div className='sm:w-48 w-12'>
            <Input
              placeholder='Pesquisar...'
              value={searchQuery}
              onChange={handleSearchChange}
              onSearch={handleSearch}
              isLoading={isLoading}
            />
          </div>
        )}
        <h1 className='sm:text-5xl text-center flex-grow font-chomsky text-xl'>Diário Nacional</h1>
        <div>
          <p className='sm:text-lg text-sm'>{currentDate}</p>
        </div>
      </header>

      <div className='border-b left-0 right-0 bottom-0 h-0.5 bg-gray-600'></div>
      <div className='border-b left-0 right-0 bottom-0 h-0.5 bg-gray-600 mt-1'></div>

      {showAlert && (
        <Alert
          message='A pesquisa deve ter pelo menos 3 caracteres.'
          onClose={() => setShowAlert(false)}
        />
      )}

      {noResults && (
        <Alert message='Nenhum resultado encontrado.' onClose={() => setNoResults(false)} />
      )}
    </>
  );
};

export default Header;
