export interface CurrencyInfoProps {
  currency: string;
  variation: string;
  value: string;
}

export interface CurrencyData {
  code: string;
  name: string;
  pctChange: string;
  bid: string;
}

export type CurrencyResponse = Record<string, CurrencyData>;
