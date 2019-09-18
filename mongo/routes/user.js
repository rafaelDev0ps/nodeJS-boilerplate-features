const express = require('express');
// Controllers
const UserController = require('../controllers/UserController');

const router = express.Router()

router.get('/getUsers/', UserController.getUsers);

router.post('/new/user/', UserController.createUser);

router.put('/edit/user/:_id', UserController.editUser);

router.delete('/delete/user/:_id', UserController.deleteUser);

module.exports = router;