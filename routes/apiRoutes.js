const express = require('express');
const register = require("../controllers/register")
const login = require("../controllers/login")
const user = require("../controllers/user")
const multer = require('multer');
const upload = multer();
const routes = express.Router();

routes.post('/register', register.register);
routes.post('/login', login);
routes.post('/user', user);
routes.get('/get-user', register.getUsers);
routes.post('/insert-model', register.insertModel);
routes.post('/insert-categoria', register.insertCategoria);
routes.get('/getCategoria', register.getCategoria);
routes.get('/getCar', register.getCar);
routes.post('/remove', register.remove);
routes.post('/edit', register.edit);
routes.post('/vendas', register.vendas);
routes.post('/search', register.search);
routes.get('/getAllData', register.getData);
routes.get('/getId', register.getId);
routes.post('/cart', register.cart);
routes.post('/cartcompra', register.cartcompra);
// routes.post('/users', UsersController.testeCreate);

module.exports = routes;