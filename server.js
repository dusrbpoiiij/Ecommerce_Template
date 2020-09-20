const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

require('dotenv').config({
  path: './config/index.env'
})

// MongoDB 
const connectDB = require('./config/db');
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// routes 
app.use('/api/user/', require('./routes/auth.route'));


app.get('/', (req, res) => {
  res.send('test route => home page');
})

// Page Not Founded
app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not founded'
  })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})

// Let's make mongodb connection
// Let's try to sign up user
// express bodyParser not working let's install it 
// Now it's work and user register successfully and generate token

// implement login user and auth middleware 
// now let's try to login
// Now login is working let's make middleware to check if user sign or nor by check token
// ok now let's get user information from token
// Let's try
// Know we get user information 