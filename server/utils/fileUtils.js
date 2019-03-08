/**
 * Created by Mohan Vamsi on 3/7/2019.
 */
'use strict';

const jetpack = require('fs-jetpack');
const path = require('path');

const fileUtils = {
    getList: function() {
        return jetpack.read(path.join(__dirname, '/../data/data.json'));
    },
};

module.exports = fileUtils;
