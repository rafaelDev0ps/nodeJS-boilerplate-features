const db = require('./db.config')
// Creating models for Posts

const Posts = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
});

// Comment the following line after run the first model creation, be careful
//Posts.sync({force: true});

// CREATE
// Posts.create({
//     postsId: 1,
//     title: 'Title example',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sapien in magna suscipit commodo. Mauris elementum suscipit aliquam. Maecenas consectetur velit pharetra, aliquet sapien in, efficitur lorem. Curabitur at urna vel felis tristique feugiat in at libero. Ut posuere justo odio, et fermentum purus gravida ac. Morbi orci purus, venenatis et lorem et, tincidunt interdum nisi. Donec vitae tempor lacus. Quisque commodo at risus ac vulputate. Nam viverra malesuada lacus auctor tristique. Praesent ultrices tellus odio, vitae sodales mi sagittis sed. Cras volutpat tincidunt molestie. Vivamus eget rutrum magna. Sed maximus id nisl ac pharetra. Cras id orci tortor. Donec vel tortor nulla.'
// });

module.exports = Posts;