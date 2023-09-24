const express = require('express')
const bodyparser = require('body-parser')
const path = require("path")
const port = 5501
const usercollection = require('./database/userdata')
const session = require('express-session');

// const open = require('open');

//const bcrypt = require('bcrypt');
import('open').then((open) => {
    // Your code that uses the 'open' module goes here
  }).catch((error) => {
    // Handle any errors that occur during the import
    console.error(error);
  });
  

require("./database/mongo_conn")

const app = express()


app.use(express.static(path.join(__dirname, 'Music streaming site (Melody)')));

app.use(bodyparser.urlencoded(
    {
        extended:true
    }
))

app.use(express.json())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));


app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'Music streaming site (Melody)', 'index.html'));
})
app.get('/isLoggedIn', (req, res) => {
    res.json({ isLoggedIn: req.session.isLoggedIn });
});


// app.post('/signup',(req,res) =>{
//     //console.log(req.body.username);
//     let req_userdata=new usercollection(req.body);
//     req_userdata.save();
//     res.redirect('/');
// })
app.post('/signup',(req,res) =>{
    let req_userdata = new usercollection(req.body);
    req_userdata.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                // Handle validation error
                const errorMessage = err.errors.password.message;
                console.log("error in validation"); // Output the validation error message
                res.send(`<!DOCTYPE html>
                <html>
                <head>
                    <title>Error</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f2f2f2;
                        }
                        .container {
                            max-width: 400px;
                            margin: 100px auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 5px;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #333;
                            text-align: center;
                            margin-bottom: 30px;
                        }
                        p {
                            margin-bottom: 20px;
                        }
                        .button {
                            display: inline-block;
                            background-color: #4CAF50;
                            color: #fff;
                            text-decoration: none;
                            padding: 10px 20px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        }
                        .button:hover {
                            background-color: #45a049;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Error</h1>
                        <p>An error occurred while processing your request.</p>
                        <p>Please try again later or check your details</p>
                        <center>
                        <a href="/" class="button">Go Back to Homepage</a> </center>
                    </div>
                </body>
                </html>`);
                
            } else {
                // Handle other errors
                console.error(err);
                res.send('Server error');
            }
        });
});


app.get('/library/index.html' ,async(req,res,)=>{
    open('../library/index.html')
    .then(() => {
      console.log('File opened successfully!');
    })
    .catch((error) => {
      console.error('Error occurred while opening the file:', error);
    });
})

app.post('/login', async (req, res) => {
    const { nameoremail, password } = req.body;
    console.log('Received login request with email/username:', nameoremail, 'and password:', password);
    try {
        const user = await usercollection.findOne({$or: [{ email: nameoremail }, { username: nameoremail }]});
        console.log('Found user in database:', user);
        if (!user) {
            return res.send('Invalid credentials');
            
        }

        const match = password == user.password;
        console.log('Password comparison result:', match);
        if (!match) {
            return res.send('Passwords not matching');
            console.log('match');
        }
        req.session.isLoggedIn = true;
        req.session.username = user.username;
        res.redirect('/');
        
    } catch (error) {
        console.error(error);
        res.send('Server error');
    }
});
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

