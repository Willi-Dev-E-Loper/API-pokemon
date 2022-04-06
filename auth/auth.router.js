const express = require('express');
const router = express.Router();

//Controllers

const authHttpHandlet = require('./auth.http');


router.route('/')
    .get(authHttpHandlet.getAuthRouter)
    .post(authHttpHandlet.setAuthRouter)
router.route('/login')
    .post(authHttpHandlet.setLogin);

    exports.router = router;