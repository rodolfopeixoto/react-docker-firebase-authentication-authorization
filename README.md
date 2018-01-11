# Firebase with React authentication

Desenvolvimento de uma aplicação com React e utilizando o firebase para authentication e authorization.

App example: 

Version current Project 0.1
================

About version
---------------------

- React
 - React-router-dom
 - Bootstrap
- Docker
- Docker Compose


Set up

Crie uma conta no firebase e crie um projeto web. Pegue os dados abaixo.

Crie na raiz do projeto projeto-name/ um arquivo chamado dev.env e adicione as seguintes variáveis de ambiente:

Não use aspas nos valores.
```
REACT_APP_API_KEY_FIREBASE=ADICIONEaquiAsuaAPIsemASPAS
REACT_APP_AUTH_DOMAIN=ADICIONEaquiOseuDOMAIN
REACT_APP_DATABASE_URL=ADICIONEaquiAdatabaseURL
REACT_APP_PROJECT_ID=ADICIONEaquiOproject_id
REACT_APP_STORAGE_BUCKET=ADICIONEaquiSTORAGEbucket
REACT_APP_MESSAGING_SENDER_ID=ADICIONEaquiAMESSAGINGsenderID
```



---------------------

Caso queira rodar localmente, basta seguir os passos abaixo.

Clone o repositório e de um:


 Basta rodar o comando abaixo:


 ```
  $ docker-compose build
 ```

 ```
  $ docker-compose run --rm web npm install
 ```

 ```
  $ sudo chown -R $USER:$USER .
 ```


 ```
  $ docker-compose up
 ```


Documentation
----------------------


### Links

Developer
---------------------
-   [Rodolfo Peixoto](http://www.rogpe.me)
