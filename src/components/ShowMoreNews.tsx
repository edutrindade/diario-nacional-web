import React from 'react';
import { IShowMoreNewsProps } from '@/interface/IShowMoreNews';

const ShowMoreNews = ({ currentPage, totalPages, onPageChange }: IShowMoreNewsProps) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='flex justify-center mt-4'>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Mais notícias...
      </button>
    </div>
  );
};

export default ShowMoreNews;
