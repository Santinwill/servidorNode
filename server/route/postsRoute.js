const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');
// const { json } = require('body-parser');

router.get('/posts', async function(req, res){
    const posts = await postsService.getPosts();
    res.json(posts);
});

router.post('/posts', async function(req, res){
    const post = req.body;
    const newPost = await postsService.savePost(post);
    res.json(newPost);
});

router.put('/posts/:id', async function(req, res){
    const post = req.body;
    await postsService.updatePost(req.params.id, post);
    res.json();
});

router.delete('/posts/:id', async function(req, res){
    const post = req.body;
    await postsService.deletePost(req.params.id, post);
    res.json(); 
});

module.exports = router;