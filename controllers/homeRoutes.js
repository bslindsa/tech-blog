const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User}]
        });

        const posts = postData.map((post) => battle.get({plain: true}));
        
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {


    res.render('dashboard'), {
        logged_in: true
    };
})


module.exports = router;