'use client';
import React from 'react';
import CurrencyInfo from '@/components/CurrencyInfo';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <CurrencyInfo />
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default LayoutDefault;
