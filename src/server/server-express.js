const express = require('express');
//const delay = require('express-delay');
const session = require('express-session');
const bodyParser = require('body-parser');
//let userData = require('/userData');

const app = express();
const port = 3000;

//app.use(delay(2000));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Origin', true);
    res.header(
        'Access-Control-Allow-Methods',
        'DELETE, GET, HEAD, POST, PUT, OPTIONS, TRACE'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'Origin,Content-Type,Accept,Authorization,X-XSRF-TOKEN'
    );
    next();
});

// app.use(session({name: 'server-session-cookie-id',
//                 // server: 'my express secret',
//                  saveUninitialized: true,
//                  resave:true,
// }));

function getSessionProperty(req,prop){
    return req.session[prop];
}

function setSessionProperty(req,prop,value){
    req.session[prop]= value;
}

let mock = {
    appConfig:require('./mock/appConfig.json')
}
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('rest/1.0/redirectPartner', function(req, res, next){

    if(req.query.externalRef){
        setSessionProperty(req,sessionConstants.OFFER_VALUE, req.query.offerValue);
    }
    else
    setSessionProperty(req,sessionConstants.OFFER_VALUE, req.query.offerValue);

    res.redirect('http://localhost:4200');
});

app.get('/rest/1.0/appConfig', (req, res) => {
    res.status(200).json(mock.appConfig);
  })

  app.post('/rest/1.0/saveConsumer', function(req,res, next){

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    if(firstName === userData.personalInfo.errorUser){
        res.status(500).json({});
    }
    else if(firstName === 'existingUser'){
        res.status(200).json({
            customerId: 'string',
            statusCode: 'SAVE_CONSUMER_EXIST'
        });
    }
  });

app.listen(port, () => {
  console.log(`Express @ 3000`)
})