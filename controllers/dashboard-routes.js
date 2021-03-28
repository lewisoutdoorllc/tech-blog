const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// RENDERS dashboard page for a LOGGED IN user only
router.get('/', (req, res) => {
    let logged = req.session.loggedIn
    if(!logged){
        res.redirect('/login')
    }
    console.log(req.session);
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_data',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// ROUTE to edit a post by ID
router.get('/edit/:id', (req, res) => {
    let logged = req.session.loggedIn
    if(!logged){
        res.redirect('/login')
    }
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'post_data',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// router.get('/edit-post', (req, res) => {
//     res.render('edit-post');
// });

router.get('/add-post', (req, res) => {
    let logged = req.session.loggedIn
    if(!logged){
        res.redirect('/login')
    }
    res.render('add-post', {loggedIn:true});
});

module.exports = router;