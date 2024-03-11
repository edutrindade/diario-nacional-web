import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActiveLink = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <nav className='bg-white text-black py-4'>
      <ul className='flex flex-col items-center px-4 sm:flex-row sm:justify-center gap-4 sm:gap-8'>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/')}
        >
          Home
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/social' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/social')}
        >
          Estatísticas Sociais
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/economica' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/economica')}
        >
          Estatísticas Econômicas
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/geociencia' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/geociencia')}
        >
          Geociências
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/ibge' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/ibge')}
        >
          IBGE
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/series' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/series')}
        >
          Séries Especiais
        </li>
        <li
          className={`nav-item cursor-pointer ${
            pathname === '/release' ? 'text-[#018EBB]' : 'hover:text-[#018EBB]'
          }`}
          onClick={() => handleNavigation('/release')}
        >
          Releases
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
