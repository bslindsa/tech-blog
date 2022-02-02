const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User}]
        });

        const posts = postData.map((post) => post.get({plain: true}));
        
        res.render('homepage', {
            ...posts,
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

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{model: Post}, {model: Comment}]
        });

        const user = userData.get({plain: true});
        
        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;