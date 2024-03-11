'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import News from './(pages)/news/page';
import LayoutDefault from './LayoutDefault';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutDefault>
        <News />
      </LayoutDefault>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
