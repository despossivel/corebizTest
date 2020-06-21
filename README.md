## Corebiz E-commerce

Este projeto foi desenvolvido em reactjs, criado utilizando o `react-create-app` e proposto como desafio de front-end pela Corebiz. 

Além dos requisitos básicos exigido, foram implementados também,   contêineres e uma esteira de CI utilizando as actions do Github, com dois gatilhos: 

 1. **develop**: Executado sempre ao receber push na branch develop
 2. **master**: Executado sempre ao receber um novo pull request na branch master

Em ambas as branchs os passos de, instalação de dependências, execução de testes, build da aplicação, build do contêiner são executados. 


## Scripts disponíveis
No diretório do projeto, você pode executar:
  

### `yarn start`

Para executa o aplicativo no modo de desenvolvimento. <br />

Abrirá [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.


### Iniciando em contêiner
Com o docker e docker-compose em sua máquina, você pode executar: 

### `docker compose up -d --build` 

Criando e subindo o contêiner em modo de desenvolvimento, abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

Em ambas alternativas a página será recarregada se você fizer edições. <br/>
 

## Tests 
  Para executar os testes de integração, você pode executar:

### `yarn test`

Inicia o corredor de teste no modo de exibição interativa. <br/> 

  
## Efetuando build

Para efetuar o build da aplicação você pode executar:

### `yarn build`

Para cria o aplicativo de produção na pasta `build`. <br/>

### Build em contêiner
Para efetuar o build em um contêiner docker, você pode executar: 

### `docker compose -f docker-compose-production.yaml up -d --build`

 Criando e subindo o contêiner para produção e abra `[http://localhost:8080](http://localhost:8080)` para visualizar. <br/>




@[despossivel](http://instagram.com/despossivel)