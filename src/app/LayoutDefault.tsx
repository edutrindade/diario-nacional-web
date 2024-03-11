'use client';
import React, { useState } from 'react';
import CurrencyInfo from '@/components/CurrencyInfo';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [searchQuery, setSearchQuery] = useState('');

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

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
