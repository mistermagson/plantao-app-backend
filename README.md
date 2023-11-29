# Projeto Plantao APP


## Backend
Arquivos do backend do projeto

### Usage

``` git clone https://github.com/mistermagson/plantao-app-frontend.git```

``` cd plantao-app-frontend/backend```

### Instalar Dependencias

``` yarn install```

### Rodar Localmente

``` yarn develop ```

### Deploy

``` criar arquivo .env ```

``` pm2 start yarn --name "backend-plantao" -- run start ```

### Gerar token linha de comando NODE
 ``` node -e "console.log(crypto.randomBytes(48).toString('hex'))"```
