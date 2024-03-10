import React, { useState } from 'react';
import { IPaginationProps } from '@/interface/IPagination';

const PaginationMobile = ({ currentPage, totalPages, onPageChange }: IPaginationProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPage = parseInt(event.target.value);
    setSelectedPage(newPage);
    onPageChange(newPage);
  };

  const pageOptions = [];
  for (let i = 1; i <= totalPages; i++) {
    pageOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className='flex items-center justify-center mt-4'>
      <select
        value={selectedPage}
        onChange={handlePageChange}
        className='px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none'
      >
        {pageOptions}
      </select>
      <span className='ml-2 text-gray-600'>de {totalPages}</span>
    </div>
  );
};

export default PaginationMobile;
