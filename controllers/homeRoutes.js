const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

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

// View dashboard with access to the user's posts and comments.
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{
                model: Post
            }]
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in
        });
        // res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        const post = postData.get({ plain: true });

        res.render('editpost', {
            post,
            logged_in: req.session.logged_in
        });
        // res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// View specific post
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: { exclude: ['password', 'email'] }
                    }
                },
                {
                    model: User,
                    attributes: { exclude: ['password'] }
                }
            ]
        });

        const post = postData.get({ plain: true });

        res.render('pubpost', {
            post,
            logged_in: req.session.logged_in
        });
        // res.json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Render page to create a new post
router.get('/newpost', withAuth, async (req, res) => {
    res.render('newpost', {
        logged_in: req.session.logged_in
    });
});



module.exports = router;