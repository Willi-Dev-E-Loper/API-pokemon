const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const passport = require('passport');
 
require('../auth')(passport);

router.route('/')
    .get(passport.authenticate('jwt', {session: false}), 
    (req, res) => {
        res.status(200).send('Hello World!')
    })
    .put(passport.authenticate('jwt', {session: false}), 
    (req, res) => {
        res.status(200).send('Hello World!')
    })
    
router.route('/pokemons')
    .post(() => {
        res.status(200).send('Hello World!')
    })
router.route('pokemons/:pokeid')
    .delete(() => {
        res.status(200).send('Hello World!')
    })
exports.router = router;

