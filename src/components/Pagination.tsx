import React from 'react';
import { IPaginationProps } from '@/interface/IPagination';

const Pagination = ({ currentPage, totalPages, onPageChange }: IPaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5; // Altere este valor conforme necessário

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftSide = Math.floor(maxPageNumbersToShow / 2);
      const rightSide = Math.ceil(maxPageNumbersToShow / 2);
      let startPage = currentPage - leftSide;
      let endPage = currentPage + rightSide;

      if (startPage <= 0) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      }

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxPageNumbersToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`mx-1 px-3 py-1 rounded-full ${
          pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <>
      <div className='flex flex-wrap justify-center items-center mt-4 gap-1'>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className='px-2 py-1 w-16 rounded-full bg-green-500 text-white'
        >
          Início
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 w-16 rounded-full ${
            currentPage === 1 ? 'bg-gray-300 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          Anterior
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 w-16 rounded-full ${
            currentPage === totalPages ? 'bg-gray-300 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          Próxima
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className='px-2 py-1 w-16 rounded-full bg-green-500 text-white'
        >
          Fim
        </button>
      </div>
      <span className='flex justify-center mt-2'>
        Página {currentPage} de {totalPages}
      </span>
    </>
  );
};

export default Pagination;
