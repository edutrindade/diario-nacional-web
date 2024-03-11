import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  isLoading?: boolean;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  className,
  onChange,
  onSearch,
  isLoading,
}: InputProps) => {
  return (
    <div className={'relative'}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-gray-100 border border-gray-300 rounded-md py-2 pl-4 pr-4 focus:outline-none focus:border-blue-500 sm:w-48 md:w-48 lg:w-64 xl:w-64 ${className}`}
      />
      {isLoading ? (
        <div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900'></div>
      ) : (
        <button
          onClick={onSearch}
          className='absolute top-0 right-0 h-full flex items-center justify-center'
        >
          <MagnifyingGlass
            className='absolute top-2 left-6 right-0 text-gray-600 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'
            weight='fill'
            size={25}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
