## Corebiz E-commerce

Este projeto foi desenvolvido em reactjs, criado utilizando o `react-create-app` e proposto como desafio de front-end pela Corebiz. 

O que deve ser feito? O desafiado deve reproduzir o layout proposto abaixo, em ReactJs, utilizando de boas praticas de programacao, clean code e uma otima arquitetura de componentes, seprado assim as responsabilidades entre eles, não se esqueça que usurfluir ao maximos das apis nativas no react, para chegar a um resultado de qualidade. 

O Layout a ser seguido se encontra em [Figma](https://www.figma.com/proto/awhTJyKgrjEOqPHUrrFBv0/Corebiz-Frontend-Challenge?node-id=1%3A2&scaling=min-zoom) e deve ser o mais fiel possivel

## Requisitos do desafio:
  
  ### Não funcionais
  1. Ter um layout fiel ao proposto
  2. [consumir uma api](https://corebiz-test.herokuapp.com/api/v1)

  Voce pode encontrar um arquivo JSON do Insomnia para as requests da api [aqui](/Insomnia.json) ou do Postman [aqui](https://documenter.getpostman.com/view/1811817/Szzj8yAq?version=latest)

  ### Funcionais
  1. A sessao de newletter deve receber apenas email valido 
  2. Ao preencher o formulario de newletter, deve chamar a rota da api para o cadastro e em caso de sucesso, ocultar o formulario e exibir a mensagem "Seu e-amil foi cadastrado com sucesso!"
  3. Ao clicar no botão comprar deve ser adicionado um item no carrinho


###  que deve ser considerado a o seguir este desafio?
  1. Hooks básicas(userState, userMemo, userCallback)
  2. Hooks complementares(userRef e outras se existir a necessidade)
  3. Contexts
  4. Aplicar os conceitos de SOLID
  5. Gitflow e versionamento
  
### O que vai ser considerado para conclusao
  1. Clean code e boas praticas de programacao
  2. Arquitetura do component
  3. Desempenho da apliçao 



#### Opcionais 

Além dos requisitos básicos exigido, foram implementados também, contêineres e uma esteira de CI utilizando as actions do Github, com dois gatilhos: 

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