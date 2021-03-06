const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    header = require('./api/header'),
    schedule = require('./api/schedule'),
    contact =require('./api/contact'),
    db = require('./database/db.js'),
    port = 3000 ;

app.use(bodyParser.json());
app.use(header);
app.use(db);
app.use(schedule);
app.use(contact);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});