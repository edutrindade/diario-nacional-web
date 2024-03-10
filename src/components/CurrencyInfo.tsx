import React, { useState, useEffect } from 'react';
import { CurrencyInfoProps, CurrencyResponse } from '@/interface/ICurrency';
import { fetchCurrencyData } from '@/services/currencyService';

const CurrencyInfo = () => {
  const [currenciesInfo, setCurrenciesInfo] = useState<CurrencyResponse>({});

  async function getCurrencies(): Promise<CurrencyResponse> {
    try {
      const currencies = 'USD-BRL,EUR-BRL,BTC-BRL';
      const data = await fetchCurrencyData(currencies);
      return data;
    } catch (error) {
      console.error('Error fetching currency data:', error);
    }

    return {};
  }

  useEffect(() => {
    //Descomentar quando for subir a aplicação
    //
    // getCurrencies().then((data) => {
    //   console.log('data:', data);
    //   setCurrenciesInfo(data);
    // });
    setCurrenciesInfo({
      USDBRL: {
        code: 'USD',
        name: 'Dólar Americano/Real Brasileiro',
        pctChange: '0.93',
        bid: '4.9806',
      },
      EURBRL: {
        code: 'EUR',
        name: 'Euro/Real Brasileiro',
        pctChange: '0.91',
        bid: '5.4463',
      },
      BTCBRL: {
        code: 'BTC',
        name: 'Bitcoin/Real Brasileiro',
        pctChange: '2.93',
        bid: '342206',
      },
    });
  }, []);

  return (
    <div className='flex flex-row gap-2 justify-center'>
      {Object.keys(currenciesInfo).map((key) => {
        const currencyInfo = currenciesInfo[key];
        const { name, pctChange, bid } = currencyInfo;
        const currencyName = name.split('/')[0].trim();
        const arrowClass =
          parseFloat(pctChange) < 0 ? 'text-red-500 text-sm' : 'text-green-500 text-sm';

        return (
          <div
            key={currencyInfo.code}
            className='flex-col px-4 sm:currency-info sm:px-4 mb-1 flex sm:flex-row sm:gap-2'
          >
            <h3 className='text-sm font-semibold'>{currencyName}</h3>
            <div className='flex items-center mb-1'>
              <span className={`${arrowClass} mr-1`}>{parseFloat(pctChange) < 0 ? '▼' : '▲'}</span>
              <span className={`${arrowClass}`}>{Math.abs(parseFloat(pctChange))}%</span>
            </div>
            <div className='text-sm font-semibold'>{bid}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrencyInfo;
