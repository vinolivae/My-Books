API contruída com node + express + mongoDB.

O objetivo é que a API sirva para agrupar livros em duas categorias:

    ______________________________________________________
    
    |   Livros que já possuo    |   Livros que desejo    |
    
    |          livro 1          |        livro 1         |
    
    |          livro 2          |        livro 2         |
    
    ______________________________________________________



Para utilizar basta ir até a pasta src > Data > index.js e na linha 2 adicionar sua connection string ou pode tentar utilizar a que já existe, porém necessitará da versão standalone do mongo. 

Além disso será necessário ter o node.js intalado e utilizar o comando node src/index.js para iniciar a aplicação no localhost:3000. 

Para testar utilize o postman, insomnia ou algum outro software com que esteja familiarizado.

    |_ POST

        - Acesse o caminho http://localhost:3000/categories e adicione ao body:
            
            {
                "name":"wish",
                "books": [
                    
                ]
            }

            {
                "name":"own",
                "books": [
                    
                ]
            }

        para criar categorias para cada tipo de livro.

        - Acesse o caminho http://localhost:3000/books e adicione o body:

            {
                "name": "Aplicações web real-time com Node.js",
                "category": <insira o id da categoria em que deseja adicionar o livro>
            }

        para criar um livro e adicioná-lo a uma categoria especifica. Adicione o id da categoria e o livro aparecerá nela.

    |_ GET

        - Acessar o caminho http://localhost:3000/categories irá te mostrar as categorias e seus respectivos livros.

        - Acessar o caminho http://localhost:3000/books irá te mostrar todos os livros e suas respectivas categorias.

    |_ GET

        - Acessar o caminho http://localhost:3000/categories/{id} irá te mostrar uma categoria especifica e caso utilize "books" ao inves de "categories" verá um livro específico, não esqueça de utilizar um id que corresponda ao objeto que quer.
    
    |_ PUT

        - Acesse o caminho http://localhost:3000/categories/{id} adicione o corpo, igual ao post e edite as partes necessárias. Caso necessite atualizar algum livro basta trocar "categories" por "books" e adicionar o id referente a entidade

    |_DELETE

        - Acessar o caminho http://localhost:3000/categories/{id} permitirá que apague sua entidade do banco de dados. Para apagar um livro basta trocar "categories" por "books" e adicionar o id referente a entidade.

na estrutura do projeto nós temos:

    |_src - responsável por agrupar a estrutura do projeto

        |_Controllers - lógica de negócio
    
        |_Data - conexão com banco de dados
    
        |_Models - modelos de entidades
    
        |_Routes - rotas 
    
    |_index.js - responsável por nossa conexão local
