import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className='bg-white text-black py-4'>
      <ul className='flex flex-col items-center px-4 sm:flex-row sm:justify-center gap-4 sm:gap-8'>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/')}
        >
          Home
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/social')}
        >
          Estatísticas Sociais
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/economica')}
        >
          Estatísticas Econômicas
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/geociencia')}
        >
          Geociências
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/ibge')}
        >
          IBGE
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/series')}
        >
          Séries Especiais
        </li>
        <li
          className='nav-item cursor-pointer hover:text-[#018EBB]'
          onClick={() => handleNavigation('/release')}
        >
          Releases
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
