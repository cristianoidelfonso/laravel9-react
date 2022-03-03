# Projeto de CRUD com Laravel 9 (API) e React JS (Frontend)

## Passo a passo ao clonar o projeto

### API
Acessar o diretório api
  #### cd api
  
Configurar o acesso ao banco de dados
  #### cp .env.example .env
  Editar as configuraçãoes de acordo com o banco de dados a ser utilizado
  
Executar o composer install
#### composer install

Gerar a chave da aplicação
#### php artisan key:generate

Executar as migrations e os seeders
#### php artisan migrate --seed

Levantar o servidor localmente
#### php artisan serve

<hr />

### Frontend

Acessar o diretório frontend
  #### cd frontend
    
Executar o npm install
#### npm install

Executar a aplicação localmente
#### npm run dev