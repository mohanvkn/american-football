/**
 * Created by 300126 on 3/6/2019.
 */
'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const fileUtils = require('./../utils/fileUtils');

router.get('/teamsList', function(req, res, next) {
    res.status(200)
        .send(fileUtils.getList())
        .end();

    return next();
});

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/../../client/build', 'index.html'));

    return next();
});

module.exports = router;
