## TP-2-Skill Factory NodeJS

### STACK

- NodeJS
- Express
- PostgreSQL
- Sequelize

#### Librerias utilizadas:

- [JWT ](https://www.npmjs.com/package/jsonwebtoken)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

### Tp-2 info

Proyecto basico de una concesionaria de autos, con autenticacion/autorizacion y CRUD.

### Configuracion del entorno de Desarrollo

- Crear un archivo .env y copiarle todo el contenido de .env.example , llenar con su usuario y password de base de datos.
- npm run install para instalar dependencias
- npm run db:create , para crear la base de datos
- npm run db:migrate , para hacer las migraciones
- npm run db:seed , para ingresar usuarios y autos demo

### Usuario Admin Demo

- importar el archivo: Concesionaria Skill Factory.postman_collection.json en postman
  para realizar las pruebas de los endpoints
