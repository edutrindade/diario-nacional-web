import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative'>
        <div className='animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 border-blue-600'></div>
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-blue-600'>
          Carregando...
        </span>
      </div>
    </div>
  );
};

export default Loading;
