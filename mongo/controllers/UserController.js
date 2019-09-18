const User = require('../models/UserModel');

exports.getUsers = function(req, res) {
    let UserModel = new User;
    UserModel.getUsers().then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    });
};
 
exports.createUser = function(req, res) {
    let UserModel = new User;
    UserModel.newUser(req.body).then(user => {
        res.send(user);
    }).catch(err => {
        res.send(err);
    });
};

exports.editUser = function(req, res) {
    let UserModel = new User;
    UserModel.updateUser(req.params._id, req.body).then(user => {
        res.send(user);
    }).catch(err => {
        res.send(err);
    });
};

exports.deleteUser = function(req, res) {
    let UserModel = new User;
    UserModel.deleteUser(req.params._id).then(() => {
        res.send('User deleted!');
    }).catch(err => {
        res.send(err);
    });
};