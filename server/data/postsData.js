const database = require('../infra/dataBase');

exports.getPosts = function() {
    return database.query('SELECT * FROM BLOG.POST');
};

exports.getPost = function(id) {
    return database.oneOrNone('SELECT * FROM BLOG.POST WHERE ID = $1', [id]);
};

exports.savePost = function(post) {
    return database.one('INSERT INTO BLOG.POST (TITLE, CONTENT) VALUES ($1, $2) RETURNING *', [post.title, post.content]);
};

exports.updatePost = function(id, post){
    return database.none('UPDATE BLOG.POST SET TITLE = $1, CONTENT = $2 WHERE ID = $3', [post.title, post.content, id]);
};

exports.deletePost = function(id){
    return database.none('DELETE FROM BLOG.POST WHERE ID = $1', [id]);
};