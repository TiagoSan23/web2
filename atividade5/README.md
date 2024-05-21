# Atividade - React TS

__Descrição da atividade:__ fazer um aplicativo web para mostrar os dados do último sorteio da Mega-sena, Lotofácil e Quina.

### Situação atual do código

A aplicação atual faz a requsição na API de loterias da Caixa, disponível em 
https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados e exibe o último sorteio da Mega-sena e Lotofácil.

### Organização do código
- `assets`: imagens dos trevos das loterias;
- `components`: componentes para exibir os resultados dos sorteios de cada loteria;
- `contexts`: contexto para propagar os resultados da mega-sena e lotofácil pela árvore de componentes. O contexto mantém no estado as propriedades `megasena` e `lotofacil`, esses objetos são propagados na árvore de componentes pelo contexto. As propriedades `megasena` e `lotofacil` são preenchidas após a requisição na API de loterias ser processada;
- `hooks`: função para acessar o contexto;
- `pages`: componente que faz a chamada dos componentes `Megasena` e `Lotofacil` e também exibe o texto *Carregando...*;
- `services`: processa a requisição na API de loterias. Esse código será invocado pelo contexto (pacote `contexts`);
- `types`: definição dos tipos de dados. A interface `Props` define as propriedades que possuem um sorteio de loteria. A interface `LoteriaProps` define os objetos a serem propagados pelo contexto. 


