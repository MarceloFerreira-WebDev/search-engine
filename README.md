## Breve Descrição do Projeto

Neste Projeto podemos preencher o formulário de pesquisa para escolher qual loja e qual categoria desejamos listar os produtos. Infelizmente, o Buscapé não permite raspagem e não possui API pública para a consulta, já o Mercado Livre possui uma API própria onde é possível fazer qualquer pesquisa. Quando o usuário executa uma pesquisa, os itens são salvos no banco de dados proprio, para caso ele faça a mesma pesquisa novamente, não seja feita outra requisição à API.

## Tecnologias utilizadas no seu desenvolvimento

1. HTML
2. CSS
3. Javascript
4. React
5. Context API
6. Axios
7. MySQL
8. Sequelize


## Como Executar o Projeto

### O Projeto está online [Aqui](https://quizzical-meat-production.up.railway.app/). basta acessar e testar suas funcionalidades.

1. Clone o projeto:
  * ` git clone git@github.com:MarceloFerreiraTrybe23B/search-engine.git`

2. Instale as dependências e inicialize o projeto:
  * Instale as dependências:
    * npm install

3. Lembre-se de configurar as variáveis de ambiente:
  *Você vai precisar configurar as variáveis tanto do backend quanto do frontend:
    *Basta verificar quais são necessárias no arquivo config.js, do Sequelize no caminho `search-engine/back-end/src/database/config/config.js`; e no arquivo productFetch.js, para o axios no caminho `search-engine/front-end/src/api/productFetch.js`.

3. Como executar a aplicação:
  * Após a instalação das dependências e a configuração das variáveis, basta executar o comando npm start, tanto no back-end, quanto no front-end, para ambos funcionarem
