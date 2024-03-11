'use client';
import React, { useEffect, useState } from 'react';
import CurrencyInfo from '@/components/CurrencyInfo';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 560);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 560);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <CurrencyInfo />
      <Header />
      {isSmallScreen ? (
        <div className='w-100'>
          <Input placeholder='Pesquisar...' onChange={handleSearchChange} className='w-full mt-2' />
        </div>
      ) : (
        <Navbar />
      )}
      {children}
    </>
  );
};

export default LayoutDefault;
