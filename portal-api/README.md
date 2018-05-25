# Acme Bank Customer Portal API

### First things first
1. Create an account at [mLab](https://mlab.com), create a database and add a user with for that DB.
2. Head over in the terminal and `touch .env` to create a .env file in the root of `portal-api`.
3. Inside .env file add these lines:
```
DB_USER=<username-from-step-1>
DB_PASS=<password-from-step-1>

```

### `npm install`
Install dependencies

### `npm start`
Start the Node server on port [http://localhost:3001](http://localhost:3001) and connection to DB

## Technology Stack

### NodeJS
Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications
(https://nodejs.org/en/)

### ExpressJS
Express 3.x is a light-weight web application framework to help organize your web application into an MVC architecture on the server side. You can use a variety of choices for your templating language (like EJS, Jade, and Dust.js)
(https://expressjs.com/)

### MongoDB
MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need
(https://www.mongodb.com/)

### mLab
mLab is the leading Database-as-a-Service for MongoDB, powering over half a million deployments worldwide
(https://mlab.com/)
