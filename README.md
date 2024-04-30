
# Diário de Notícias

Diário de Notícias é um projeto web que oferece acesso fácil e rápido às últimas notícias disponíveis na API de Notícias do IBGE. Com um design intuitivo e componentes bem estruturados, o Diário de Notícias permite aos usuários ficarem atualizados com as informações mais relevantes do momento.

## Instalação

Para começar, certifique-se de ter o Node.js instalado em seu computador. Em seguida, clone o repositório do projeto e instale as dependências usando npm, yarn ou pnpm:

```bash
npm install
# ou 
yarn install
# ou
pnpm install 
```

## Rodando o projeto localmente

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento localmente. Basta executar um dos seguintes comandos:

```bash
npm run dev
# ou 
yarn dev
# ou 
pnpm dev
```

Em seguida, abra seu navegador e acesse [http://localhost:3000](http://localhost:3000/) para visualizar o projeto.

## Sobre o Projeto

O Diário de Notícias tem como objetivo fornecer um ambiente amigável para os usuários se manterem informados sobre os acontecimentos mais recentes publicados pelo IBGE. Ele oferece uma página inicial onde os usuários podem visualizar as últimas notícias e carregar mais notícias conforme desejarem. Além disso, o projeto conta com páginas dedicadas a diferentes editorias, como "Estatísticas Sociais", "Estatísticas Econômicas", "Geociências", "IBGE" e "Séries Especiais".

![Home](https://i.ibb.co/7Wnn0J9/Design01.png "Home")

![New](https://i.ibb.co/Ld4GvrQ/Design02.png "New")

Para uma experiência mais fluida, implementei diversos componentes, incluindo Alert, Header, Input, Loading, Navbar, Pagination, PaginationMobile, ShowMoreNews e um componente extra chamado CurrencyInfo. Este último é um extra que consome uma API de conversão de moedas para mostrar o valor atual do Dólar, Euro e Bitcoin, dando mais cara de jornal informativo ao Diário de Notícias.

Eventualmente, caso fosse um projeto a ser enviado para produção, seriam tratadas variáveis de ambiente e ambientes de desenvolvimento separados. Não senti necessidade pela simplicidade do serviço utilizado.

## Principais Dependências

* **Next.js** : Utilizei o Next.js para construir o projeto devido à sua capacidade de renderização do lado do servidor, facilitando a construção de aplicações web eficientes e escaláveis, além de ser uma das exigências do desafio atendido.
* **React Query** : O React Query facilita a busca e o gerenciamento de dados provenientes da API, garantindo uma experiência de usuário mais fluida e responsiva.
* **React Hook Form** : Implementei o React Hook Form para lidar com o campo de pesquisa, tornando o processo de busca mais simples e interativo para os usuários.
* **Tailwind CSS** : Optei pelo Tailwind CSS para estilizar o projeto devido à sua abordagem baseada em classes e sua ampla gama de utilitários de estilo, permitindo uma estilização rápida e consistente dos componentes.

Devido ao curto prazo para submissão da aplicação, muita coisa foi deixada para aperfeiçoar no futuro. Novos filtros por data, por exemplo, ou uma refatoração de componente único para lidar com cada redirecionamento de página, dentre outros. Entretanto, busquei simular como se cada página aberta possuísse sua própria regra de negócio, isolando assim os temas (editorias). No mais, contribuições e Pull Requests são sempre bem-vindas.

## Deploy com Vercel

Para visualizar o projeto acesse [https://diario-nacional-web.vercel.app/](https://diario-nacional-web.vercel.app). 

Obrigado pela visita 😁 !
