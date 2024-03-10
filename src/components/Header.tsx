'use client';
import React, { useState } from 'react';
import { List } from '@phosphor-icons/react/dist/ssr/List';
import { X } from '@phosphor-icons/react/dist/ssr/X';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='flex justify-between items-center py-4 px-1 bg-white'>
        <div className='sm:w-48 w-12'>
          {isMenuOpen ? (
            <X
              className='text-gray-800 cursor-pointer'
              weight='fill'
              size={26}
              onClick={toggleMenu}
            />
          ) : (
            <List
              className='text-gray-800 cursor-pointer'
              weight='fill'
              size={26}
              onClick={toggleMenu}
            />
          )}
        </div>
        <h1 className='sm:text-5xl text-center flex-grow font-chomsky text-xl'>Diário Nacional</h1>
        <div>
          <p className='sm:text-lg text-sm'>{currentDate}</p>
        </div>
      </header>
      <div className='border-b left-0 right-0 bottom-0 h-0.5 bg-gray-600'></div>
      <div className='border-b left-0 right-0 bottom-0 h-0.5 bg-gray-600 mt-1'></div>
    </>
  );
};

export default Header;
