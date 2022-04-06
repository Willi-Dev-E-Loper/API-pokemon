const express = require('express');
const router = express.Router();

//Controllers

const authHttpHandlet = require('./auth.http');


router.route('/login')
    .post(authHttpHandlet.LoginUser);

    exports.router = router;