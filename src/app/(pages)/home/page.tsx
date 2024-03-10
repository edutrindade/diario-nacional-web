'use client';
import React, { useState, useEffect } from 'react';
import CurrencyInfo from '@/components/CurrencyInfo';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { CurrencyData, CurrencyResponse } from '@/interface/ICurrency';
import { fetchCurrencyData } from '@/services/currencyService';
import { INews, INewsResponse } from '@/interface/INews';

export default function Home() {
  const newsList: INewsResponse = {
    count: 1879,
    page: 1,
    totalPages: 79,
    nextPage: 2,
    previousPage: 0,
    showingFrom: 1,
    showingTo: 24,
    items: [
      {
        id: 39365,
        tipo: 'Notícia',
        titulo:
          'Em Brasília, IBGE amplia Diálogos Institucionais visando o fortalecimento da carreira, comunicação e parcerias',
        introducao:
          'Presidente do IBGE com a ministra Sonia Guajajara em entendimentos sobre o mapeamento fundiário das terras indígenas – Fotos: Acervo IBGE O Instituto Brasileiro de Geografia e Estatística (IBGE) realizou em Brasília novas rodadas de reuniões dos Diálogos...',
        data_publicacao: '08/03/2024 16:45:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/Pochmann-em-Brasilia-THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/Pochmann-em-Brasilia-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39365-em-brasilia-ibge-amplia-dialogos-institucionais-visando-o-fortalecimento-da-carreira-comunicacao-e-parcerias.html',
      },
      {
        id: 39358,
        tipo: 'Notícia',
        titulo:
          'Mulheres pretas ou pardas gastam mais tempo em tarefas domésticas, participam menos do mercado de trabalho e são mais afetadas pela pobreza',
        introducao:
          'Em 2022, mulheres pretas ou pardas dedicaram 1,6 hora a mais por semana a afazeres domésticos e cuidados de pessoas do que as brancas - Foto: Licia Rubinstein/Agência IBGE Notícias No Brasil, as mulheres pretas ou pardas são mais afetadas pelas...',
        data_publicacao: '08/03/2024 10:00:00',
        produto_id: 20163,
        produtos:
          '20163|Estatísticas de Gênero - Indicadores sociais das mulheres no Brasil|estatisticas-de-genero-indicadores-sociais-das-mulheres-no-brasil|2862',
        editorias: 'sociais',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/EstatGenero_THUMB_LiciaRubinstein.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/EstatGenero_HOME_LiciaRubinstein.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '20163',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39358-mulheres-pretas-ou-pardas-gastam-mais-tempo-em-tarefas-domesticas-participam-menos-do-mercado-de-trabalho-e-sao-mais-afetadas-pela-pobreza.html',
      },
      {
        id: 39351,
        tipo: 'Notícia',
        titulo:
          'Webinários do Hub Regional para Big Data discutem experimentos com dados alternativos',
        introducao:
          'O Hub Regional da ONU para Big Data no Brasil realizará uma série de webinários para apresentar experiências de utilização de fontes de dados alternativos na produção de indicadores confiáveis. O primeiro seminário será em 15 de março, às 13h, e abordará...',
        data_publicacao: '07/03/2024 09:28:32',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/ENCE_HUB_Thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/ENCE_HUB_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39351-webinarios-do-hub-regional-para-big-data-discutem-experimentos-com-dados-alternativos.html',
      },
      {
        id: 39345,
        tipo: 'Notícia',
        titulo: 'Produção industrial recua 1,6% em janeiro após dois meses em alta',
        introducao:
          'Indústrias extrativistas e produtos alimentícios influenciam recuo da indústria em janeiro de 2024 - Foto: Agência Vale A produção industrial recuou 1,6% na passagem de dezembro de 2023 para janeiro de 2024, após acumular expansão de 2,9% no período...',
        data_publicacao: '06/03/2024 09:00:00',
        produto_id: 9294,
        produtos:
          '9294|PIM-PF Brasil#pimpf1|pesquisa-industrial-mensal-producao-fisica-brasil|2209',
        editorias: 'economicas',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/pim_thumb_Vale.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/pim_home_Vale.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '9294',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39345-producao-industrial-recua-1-6-em-janeiro-apos-dois-meses-em-alta.html',
      },
      {
        id: 39321,
        tipo: 'Notícia',
        titulo:
          'IBGE discute o presente e o futuro das estatísticas no mundo na 55ª Sessão da Comissão de Estatística da ONU',
        introducao:
          'A delegação do IBGE participou de 32 Sessões ordinárias e 8 eventos paralelos - Foto: Arquivo UNSC O presente e o futuro das estatísticas globais, integração regional, novos indicadores ambientais e a retomada do protagonismo internacional do Instituto...',
        data_publicacao: '05/03/2024 15:00:42',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/NacoesUnidasTHUMB-arquivoUNSC.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_03\\/NacoesUnidasHOME-arquivoUNSC.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39321-ibge-discute-o-presente-e-o-futuro-das-estatisticas-no-mundo-na-55-sessao-da-comissao-de-estatistica-da-onu.html',
      },
      {
        id: 39320,
        tipo: 'Notícia',
        titulo: 'Preços da indústria caem 0,31% em janeiro, terceira queda consecutiva',
        introducao:
          'O setor de refino de petróleo e biocombustíveis (-4,77%) foi o que teve variação mais intensa e maior influência (-0,51 p.p.) no IPP de janeiro - Foto: André Motta de Souza/Petrobras Pela terceira vez consecutiva, os preços da indústria nacional...',
        data_publicacao: '05/03/2024 09:00:00',
        produto_id: 9282,
        produtos:
          '9282|Índice de Preços ao Produtor - Indústrias Extrativas e de Transformação|indice-de-precos-ao-produtor-industrias-extrativas-e-de-transformacao|2081',
        editorias: 'economicas',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/IPP_Thumb_Andr-Motta-de-Souza-Petrobras.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/IPP_Home_Andr-Motta-de-Souza-Petrobras.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '9282',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39320-precos-da-industria-caem-0-31-em-janeiro-terceira-queda-consecutiva.html',
      },
      {
        id: 39312,
        tipo: 'Notícia',
        titulo: 'Já está disponível a Agenda IBGE de 4 a 10 de março',
        introducao:
          'Agenda IBGE traz a programação do instituto para a semana - Foto: Bel Corção/Brasil com S O IBGE divulgou hoje (4), às 9h, a Agenda IBGE. Com reuniões internas e externas, eventos e atividades, a Agenda traz a programação do Instituto para a semana dos...',
        data_publicacao: '04/03/2024 09:00:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Agenda-IBGE_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_01\\/Agenda-IBGE_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39312-ja-esta-disponivel-a-agenda-ibge-de-4-a-10-de-marco.html',
      },
      {
        id: 39306,
        tipo: 'Notícia',
        titulo: 'Com alta recorde da Agropecuária, PIB fecha 2023 em 2,9%',
        introducao:
          'Agropecuária apresentou o crescimento recorde em 2023 com aumento na produção de milho e soja - Foto - Jaelson Lucas-AEN-PR O Produto Interno Bruto (PIB) do país apresentou estabilidade no quarto trimestre de 2023 e encerrou o ano com crescimento de...',
        data_publicacao: '01/03/2024 09:00:00',
        produto_id: 9300,
        produtos: '9300|Sistema de Contas Nacionais Trimestrais|contas-nacionais-trimestrais|2087',
        editorias: 'economicas',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/PIB_Tri-2023_THUMB_Jaelson-Lucas-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_03\\/PIB_Tri-2023_HOME_Jaelson-Lucas-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '9300',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39306-com-alta-recorde-da-agropecuaria-pib-fecha-2023-em-2-9.html',
      },
      {
        id: 39284,
        tipo: 'Notícia',
        titulo:
          'Taxa de desocupação fica em 7,6% no tri encerrado em janeiro, enquanto ocupação e rendimento crescem ',
        introducao:
          'Setor de Transportes, Armazenagem e Correios foi um dos que mais contribuíram para o aumento da população ocupada. Foto: Freepik A taxa de desocupação para o trimestre móvel encerrado em janeiro de 2024 ficou em 7,6%, mesmo percentual do trimestre móvel...',
        data_publicacao: '29/02/2024 09:00:00',
        produto_id: 9171,
        produtos:
          '9171|Divulgação mensal#pnadc1|pesquisa-nacional-por-amostra-de-domicilios-continua-mensal|2511',
        editorias: 'sociais',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/Pnad_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/Pnad_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '9171',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39284-taxa-de-desocupacao-fica-em-7-6-no-tri-encerrado-em-janeiro-enquanto-ocupacao-e-rendimento-crescem.html',
      },
      {
        id: 39288,
        tipo: 'Notícia',
        titulo:
          'IBGE debate ODS, estatísticas para inclusão e integração regional na 55ª Sessão da Comissão de Estatística da ONU',
        introducao:
          'No primeiro dia da 55ª Sessão da Comissão de Estatística da ONU, a delegação do IBGE participou de debates sobre os ODS - Foto: Acervo IBGE No primeiro dia da 55ª Sessão da Comissão de Estatística da ONU, realizada na cidade de Nova York, nos Estados...',
        data_publicacao: '28/02/2024 16:55:04',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/IBGE-ONU_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/IBGE-ONU_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39288-ibge-debate-ods-estatisticas-para-inclusao-e-integracao-regional-na-55-sessao-da-comissao-de-estatistica-da-onu.html',
      },
      {
        id: 39282,
        tipo: 'Notícia',
        titulo:
          'IBGE divulgará em Florianópolis os resultados do Censo 2022: Agregados por Setores Censitários preliminares - População e domicílios e Malha de Setores Censitários Preliminares ',
        introducao:
          'Foto: Ricardo Wolffenbüttel/SECOM-SC A cidade de Florianópolis, capital do estado de Santa Catarina, foi escolhida pelo Instituto Brasileiro de Geografia e Estatística (IBGE) para sediar no dia 21 de março, às 10h, o lançamento dos resultados do “Censo...',
        data_publicacao: '28/02/2024 13:30:49',
        produto_id: 22827,
        produtos: '22827|Censo 2022#3|censo-demografico-2022|2098',
        editorias: 'censo2020',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CensoFloripa_THUMB_Ricardo-Wolffenbttel_SECOM-SC.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CensoFloripa_HOME_Ricardo-Wolffenbttel_SECOM-SC.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '22827',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39282-ibge-divulgara-em-florianopolis-os-resultados-do-censo-2022-agregados-por-setores-censitarios-preliminares-populacao-e-domicilios.html',
      },
      {
        id: 39271,
        tipo: 'Notícia',
        titulo: '“Enem dos Concursos”: quase 1 milhão de inscritos para vagas no IBGE',
        introducao:
          'IBGE recebeu 996.395 inscrições no “Enem dos Concursos” A ministra da Gestão e da Inovação em Serviços Públicos, Esther Dweck, apresentou, na última sexta-feira (23), o balanço final das inscrições do Concurso Público Nacional Unificado (CPNU). Dos...',
        data_publicacao: '27/02/2024 15:30:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Concurso_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Concurso_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39271-enem-dos-concursos-quase-1-milhao-de-inscritos-para-vagas-no-ibge.html',
      },
      {
        id: 39264,
        tipo: 'Notícia',
        titulo: 'Com impacto de Educação, IPCA-15 é de 0,78% em fevereiro',
        introducao:
          'Por conta dos reajustes praticados no início do ano letivo, Educação (5,07%) impacta no resultado do IPCA-15 de fevereiro - Foto: Tomaz Silva/Agência Brasil A prévia da inflação ficou em 0,78% em fevereiro, 0,47 ponto percentual (p.p.) maior que a de...',
        data_publicacao: '27/02/2024 09:00:00',
        produto_id: 9260,
        produtos:
          '9260|Índice Nacional de Preços ao Consumidor Amplo 15|indice-nacional-de-precos-ao-consumidor-amplo-15|2213',
        editorias: 'economicas',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPCA-15_THUMB_TomazSilva-AgenciaBrasil.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2024_02\\/IPCA-15_HOME_TomazSilva-AgenciaBrasil.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '9260',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39264-com-impacto-de-educacao-ipca-15-e-de-0-78-em-fevereiro.html',
      },
      {
        id: 39266,
        tipo: 'Notícia',
        titulo:
          'IBGE realiza oficina para 180 gestores públicos, educadores e estudantes em Diadema (SP)',
        introducao:
          'Cento e oitenta pessoas participaram da oficina de capacitação técnica em ferramentas digitais do IBGE, em Diadema (SP) - Foto: Ralph Izumi/IBGE O IBGE realizou, na tarde da última sexta-feira (23), a oficina de capacitação técnica Um território de...',
        data_publicacao: '26/02/2024 17:24:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Diadema_Oficina_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Diadema_Oficina_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39266-titulo-ibge-realiza-oficina-para-180-gestores-publicos-educadores-e-estudantes-em-diadema-sp.html',
      },
      {
        id: 39257,
        tipo: 'Notícia',
        titulo: 'IBGE participa da 55ª Sessão da Comissão de Estatística da ONU, em Nova York',
        introducao:
          'O Instituto Brasileiro de Geografia e Estatística (IBGE) participa da 55ª Sessão da Comissão de Estatística da ONU e seus eventos paralelos, realizada em Nova York, nos Estados Unidos, de 27 de fevereiro a 1 de março. A Comissão de Estatística da ONU,...',
        data_publicacao: '26/02/2024 12:43:16',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/statistical-comission-HOME.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/statistical-comission-HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39257-ibge-participa-55-sessao-da-comissao-de-estatistica-da-onu-em-nova-york.html',
      },
      {
        id: 39254,
        tipo: 'Notícia',
        titulo: 'IBGE disponibiliza agenda de 26 de fevereiro a 3 de março',
        introducao:
          'Agenda IBGE traz a programação do instituto para a semana - Foto: Bel Corção/Brasil com S Divulgada hoje (26), às 9h, a Agenda IBGE traz as atividades do Instituto para esta semana. A edição disponibilizada contempla as divulgações, as reuniões internas...',
        data_publicacao: '26/02/2024 10:26:35',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Agenda-IBGE_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Agenda-IBGE_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39254-ibge-disponibiliza-agenda-de-26-de-fevereiro-a-3-de-marco.html',
      },
      {
        id: 39248,
        tipo: 'Notícia',
        titulo:
          'Em auditório lotado, IBGE divulga resultados do Censo 2022: características dos domicílios em Diadema (SP)',
        introducao:
          'Evento do Censo 2022 reúne cerca de 600 pessoas em teatro de Diadema (SP) - Foto: Helena Pontes/Agência IBGE Notícias Com participação de mais de 700 pessoas presentes, o Instituto Brasileiro de Geografia e Estatística (IBGE) divulgou nesta sexta-feira,...',
        data_publicacao: '23/02/2024 18:27:52',
        produto_id: 22827,
        produtos: '22827|Censo 2022#3|censo-demografico-2022|2098',
        editorias: 'ibge;censo2020',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/censo_fotos_HOME.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/censo_fotos_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '22827',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39248-em-auditorio-lotado-ibge-divulga-resultados-do-censo-2022-caracteristicas-dos-domicilios-em-diadema-sp.html',
      },
      {
        id: 39249,
        tipo: 'Notícia',
        titulo:
          'IBGE e Consórcio Intermunicipal do Grande ABC assinam protocolo de intenções de cooperação técnica',
        introducao:
          'IBGE e Consórcio Intermunicipal do Grande ABC assinam protocolo de intenções de cooperação técnica O Instituto Brasileiro de Geografia e Estatística (IBGE) e o Consórcio Intermunicipal Grande ABC assinaram nesta sexta-feira, 23, um protocolo de intenções...',
        data_publicacao: '23/02/2024 18:01:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CONSRCIO_thumb.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CONSRCIOi_home.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39249-ibge-e-consorcio-intermunicipal-do-grande-abc-assinam-protocolo-de-intencoes-de-cooperacao-tecnica.html',
      },
      {
        id: 39247,
        tipo: 'Notícia',
        titulo: 'IBGE amplia Diálogos Institucionais em segundo dia de reuniões em Brasília',
        introducao:
          'Marcio Pochmann no ministério das Comunicações com o ministro Juscelino Filho - Foto: Acervo IBGE O Instituto Brasileiro de Geografia e Estatística (IBGE), em continuidade à rodada de reuniões dos Diálogos Institucionais, parte do Projeto Diálogos IBGE...',
        data_publicacao: '23/02/2024 17:35:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/2-PR-no-DF_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/2-PR-no-DF_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39247-ibge-amplia-dialogos-institucionais-em-segundo-dia-de-reunioes-em-brasilia.html',
      },
      {
        id: 39237,
        tipo: 'Notícia',
        titulo:
          'Censo 2022: rede de esgoto alcança 62,5% da população, mas desigualdades regionais e por cor e raça persistem',
        introducao:
          'Apesar da expansão da rede de coleta de esgoto no país entre 2010 e 2022, 24,3% da população ainda utiliza métodos precários de esgotamento sanitário. Foto: Sophia Cabral/Prefeitura Municipal de Colombo A proporção de domicílios com acesso à rede de...',
        data_publicacao: '23/02/2024 10:00:00',
        produto_id: 22827,
        produtos: '22827|Censo 2022#3|censo-demografico-2022|2098',
        editorias: 'ibge;censo2020',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Censo_Esgotamento_THUMB_Sophia-Cabral--PMColombo-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Censo_Esgotamento_HOME_Sophia-Cabral--PMColombo-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '22827',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39237-censo-2022-rede-de-esgoto-alcanca-62-5-da-populacao-mas-desigualdades-regionais-e-por-cor-e-raca-persistem.html',
      },
      {
        id: 39239,
        tipo: 'Notícia',
        titulo:
          'Censo 2022: Cerca de oito a cada dez pessoas moravam em casas, mas cresce proporção de moradores em apartamentos',
        introducao:
          'Praia em Balneário Camboriú (SC), um dos três municípios com predomínio de moradores em apartamentos - Foto: Prefeitura de Balneário Camboriú Em 2022, havia no país 59,6 milhões de casas ocupadas, nas quais residiam 171,3 milhões de pessoas. Ou seja, a...',
        data_publicacao: '23/02/2024 10:00:00',
        produto_id: 22827,
        produtos: '22827|Censo 2022#3|censo-demografico-2022|2098',
        editorias: 'sociais;censo2020',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/Censo-Domicilios_Prefeitura-Balnerio-Cambori.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_sociais\\/2024_02\\/Censo-Domicilios_HOME_Prefeitura-Balnerio-Cambori.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '22827',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39239-censo-2022-cerca-de-oito-a-cada-dez-pessoas-moravam-em-casas-mas-cresce-proporcao-de-moradores-em-apartamentos.html',
      },
      {
        id: 39234,
        tipo: 'Notícia',
        titulo: 'Em Brasília, IBGE articula parcerias em nova rodada dos Diálogos Institucionais ',
        introducao:
          'O Ministro da Agricultura Carlos Fávaro e equipe receberam o presidente Marcio Pochmann no Ministério da Agricultura e Pecuária - Foto: Acervo IBGE Quatro ministérios, uma Agência reguladora e uma Fundação foram os órgãos visitados pelo Instituto...',
        data_publicacao: '22/02/2024 12:00:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/PR-no-DF_THUMB-2.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/PR-no-DF_HOME-2.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39234-em-brasilia-ibge-articula-parcerias-em-nova-rodada-dos-dialogos-institucionais.html',
      },
      {
        id: 39232,
        tipo: 'Notícia',
        titulo: 'IBGE divulga em Diadema (SP) resultados do Censo 2022',
        introducao:
          'O IBGE divulga nesta sexta feira, 23 de fevereiro, às 10h, os resultados do Censo 2022 com as características dos domicílios, elaboradas a partir das informações do questionário do universo (aplicado em todos os domicílios do país). A divulgação será no...',
        data_publicacao: '21/02/2024 17:50:11',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CensoDomicilios_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/CensoDomicilios_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39232-ibge-divulga-em-diadema-sp-resultados-do-censo-2022.html',
      },
      {
        id: 39228,
        tipo: 'Notícia',
        titulo: 'IBGE recebe em sua sede o embaixador do Japão',
        introducao:
          'Foto: Márcio Costa/Agência IBGE Notícias O presidente do IBGE, Marcio Pochmann, recebeu nesta terça-feira, 20, na sede do Instituto, no Rio de Janeiro, o embaixador do Japão no Brasil, Hayashi Teiji. A reunião contou ainda com a participação dos...',
        data_publicacao: '20/02/2024 17:55:48',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens:
          '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Pochman_Embaixador-Japo_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2024_02\\/Pochman_Embaixador-Japo_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/39228-ibge-recebe-em-sua-sede-o-embaixador-do-japao.html',
      },
    ],
  };

  const renderNewsItem = (newsItem: INews) => (
    <div className='group'>
      <div className='group-hover:text-blue-900 cursor-pointer'>
        <p className='text-2xl font-semibold'>{newsItem.titulo}</p>
        <p className='text-gray-600 text-md'>{newsItem.introducao}</p>
      </div>
    </div>
  );

  return (
    <div>
      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-2'>
          <div className='bg-white cursor-pointer mb-6 relative overflow-hidden'>
            <div className='group'>
              <Image
                src={`https://agenciadenoticias.ibge.gov.br/${
                  JSON.parse(newsList.items[0].imagens).image_fulltext
                }`}
                alt={newsList.items[0].titulo}
                layout='responsive'
                width={600}
                height={400}
                objectFit='cover'
                className='transition-transform duration-500 ease-in-out transform hover:scale-105'
              />

              <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white'>
                <div className='text-3xl lg:text-3xl md:text-xxl sm:text-xl xs:text-sm max-w-full font-semibold'>
                  {newsList.items[0].titulo}
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-6 flex-col mb-8'>
            {newsList.items.slice(1, 4).map((newsItem, index) => (
              <React.Fragment key={index}>
                {renderNewsItem(newsItem)}
                {index < 2 && <div className='border-b border-gray-300'></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {newsList.items.slice(4).map((news, index) => (
            <div key={index} className='bg-white cursor-pointer'>
              <div className='group'>
                <Image
                  src={`https://agenciadenoticias.ibge.gov.br/${
                    JSON.parse(news.imagens).image_fulltext
                  }`}
                  alt={news.titulo}
                  layout='responsive'
                  width={300}
                  height={200}
                  objectFit='cover'
                  className='transition-transform duration-500 ease-in-out transform group-hover:scale-105'
                />
                <div className='py-2 group-hover:text-blue-900'>
                  <h3 className='text-xl font-semibold mb-2'>{news.titulo}</h3>
                  <p className='text-gray-600'>{news.data_publicacao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <h2 className='text-2xl font-semibold mb-4'>Últimas Notícias</h2> */}
      </section>
    </div>
  );
}
