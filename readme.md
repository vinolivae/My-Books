API contruída com node + express + mongoDB.

O objetivo é que a API sirva para agrupar livros em duas categorias:
______________________________________________________
|   Livros que já possuo    |   Livros que desejo    |
|          livro 1          |        livro 1         |
|          livro 2          |        livro 2         |
______________________________________________________


Para utilizar basta ir até a pasta src > Data > index.js e na linha 2 adicionar sua connection string ou pode tentar utilizar a que já existe, porém necessitará da versão standalone do mongo. 

na estrutura do projeto nós temos:

|_src - responsável por agrupar a estrutura do projeto
    |_Controllers - lógica de negócio
    |_Data - conexão com banco de dados
    |_Models - modelos de entidades
    |_Routes - rotas 
|_index.js - responsável por nossa conexão local