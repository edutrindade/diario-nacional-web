import { IAlertProps } from '@/interface/IAlertProps';
import React from 'react';

const Alert = ({ message, onClose }: IAlertProps) => {
  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4'
      role='alert'
    >
      <strong className='font-bold'>Atenção!</strong>
      <span className='block sm:inline'> {message}</span>
      <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
        <svg
          className='fill-current h-6 w-6 text-red-500'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          onClick={onClose}
        >
          <title>Fechar</title>
          <path
            fillRule='evenodd'
            d='M14.354 5.354a2 2 0 0 0-2.828 0L10 7.172 7.172 4.354a2 2 0 0 0-2.828 2.828L7.172 10l-2.828 2.828a2 2 0 1 0 2.828 2.828L10 12.828l2.828 2.828a2 2 0 1 0 2.828-2.828L12.828 10l2.828-2.828a2 2 0 0 0 0-2.828z'
          />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
