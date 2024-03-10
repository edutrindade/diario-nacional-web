'use client';
import { useEffect, useState } from 'react';
import { INews } from '@/interface/INews';
import Image from 'next/image';
import LayoutDefault from '@/app/LayoutDefault';

const NewsDetailsPage = () => {
  const [newsItem, setNewsItem] = useState<INews | null>(null);

  useEffect(() => {
    const storedNewsItem = localStorage.getItem('selectedNewsItem');
    if (storedNewsItem) {
      setNewsItem(JSON.parse(storedNewsItem));
    }
  }, []);

  if (!newsItem) {
    return <div>Carregando...</div>;
  }

  const { titulo, introducao, data_publicacao, link } = newsItem;

  return (
    <LayoutDefault>
      <div className='flex flex-col items-center justify-center w-100 my-6 px-16'>
        <header className='flex flex-col'>
          <div className='flex flex-row justify-between'>
            <div className='text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-sm max-w-full text-gray-400'>
              Editoria: <span className='text-blue-300'>Séries Especiais</span>
            </div>
            <div className='text-lg lg:text-lg md:text-lg sm:text-lg xs:text-sm max-w-full text-gray-400'>
              Atualizado em {data_publicacao}
            </div>
          </div>
          <div className='text-5xl lg:text-5xl md:text-xxl sm:text-xl xs:text-sm max-w-full font-semibold text-[#333] mt-4'>
            {titulo}
          </div>
        </header>

        <div className='my-8'>
          <Image
            src={`https://agenciadenoticias.ibge.gov.br/${
              JSON.parse(newsItem.imagens).image_fulltext
            }`}
            alt={newsItem.titulo}
            layout=''
            width={720}
            height={400}
            objectFit='cover'
          />
          <legend className='text-gray-500 text-sm'>Foto: Acervo IBGE</legend>
        </div>

        <p className='text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm max-w-full text-justify text-[#333] font-roboto'>
          {introducao}
          <div className='flex justify-center -mt-4'>
            <a
              href={link}
              target='_blank'
              className='text-blue-800 cursor-pointer text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm xs:text-sm max-w-full mt-8'
            >
              Continuar lendo...
            </a>
          </div>
        </p>
      </div>
    </LayoutDefault>
  );
};

export default NewsDetailsPage;
