const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedb', 'root', 'rafael', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection successful.');
}).catch((error) => {
    console.log('Database connection denied.');
    console.log('LOG ERROR: ', error)
}); 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};


