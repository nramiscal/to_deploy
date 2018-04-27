let mongoose    = require('mongoose');
    // fs          = require('fs'),
    // path        = require('path'),
    // models = path.join(__dirname,'../models');

mongoose.connect('mongodb://localhost/blackbelt');
mongoose.Promise = global.Promise; // use native promises


// load all your models files :)
// fs.readdirSync(models).forEach(file => {
//     if(file.includes('.js')){
//         console.log(`loading ${file}...`);
//         require(`${models}/${file}`);
//     }
// });

require('../models/pet');
