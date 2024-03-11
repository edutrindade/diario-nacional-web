import React, { useState, useEffect } from 'react';
import { CurrencyResponse } from '@/interface/ICurrency';
import { fetchCurrencyData } from '@/services/currencyService';

const CurrencyInfo = () => {
  const [currenciesInfo, setCurrenciesInfo] = useState<CurrencyResponse>({});
  const [loading, setLoading] = useState(true);

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
    getCurrencies().then((data) => {
      setCurrenciesInfo(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='flex flex-row gap-2 justify-center'>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        Object.keys(currenciesInfo).map((key) => {
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
                <span className={`${arrowClass} mr-1`}>
                  {parseFloat(pctChange) < 0 ? '▼' : '▲'}
                </span>
                <span className={`${arrowClass}`}>{Math.abs(parseFloat(pctChange))}%</span>
              </div>
              <div className='text-sm font-semibold'>{bid}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CurrencyInfo;
