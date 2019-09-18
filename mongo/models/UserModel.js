const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = require('../schemas/UserSchema');
 mongoose.model('users', UserSchema);

const saltRounds = 10;


class User {
    constructor(name, lastname, email, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    async encryptPassword(password) {
        let hashedPsw = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function(err, hash) {
                if(err) reject(err);
                resolve(hash);
            });
        });
        return hashedPsw;
    }

    async newUser(user) {
        const encrypt = await this.encryptPassword(user.password);
        user.password = encrypt;
        let UserModel = mongoose.model('users', UserSchema);
        let users = new UserModel(user);
        return await users.save();
    }

    async getUsers() {
        try {
            const users = await mongoose.model('users').find();
            return users;
        }
        catch (err) {
            console.log(err);
        }
    }

    async updateUser(userID, user) {
        const encrypt = await this.encryptPassword(user.password);
        user.password = encrypt;
        let userUpdated = await mongoose.model('users').findByIdAndUpdate(userID, user);
        return userUpdated;
    }

    async deleteUser(userID) {
        let userDeleted = await mongoose.model('users').findByIdAndDelete(userID);
        return userDeleted;
    }
}

module.exports = User;