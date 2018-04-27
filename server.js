let express = require('express'),
    app     = express(),
    bp      = require('body-parser'),
    port    = 1234;
    // session = require('express-session');



app.use(bp.urlencoded({ extended: true })); // pull form data out of requests
app.use(express.json());
app.use(express.static(__dirname + '/client/dist'));

// mongoose
require('./server/config/mongoose');
// routes
require('./server/config/routes')(app);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
