import { CurrencyData, CurrencyResponse } from '@/interface/ICurrency';

async function fetchCurrencyData(currencies: string): Promise<CurrencyResponse> {
  try {
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${currencies}`);

    if (!response.ok) {
      throw new Error('Failed to fetch currency data');
    }

    const data: CurrencyResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    throw error;
  }
}

export { fetchCurrencyData };
