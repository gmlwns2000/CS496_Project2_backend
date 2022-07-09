const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const express = require('express');
const mysql= require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'engage12!@',
  database : 'appdata'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

const app = express();

app.get('/fetchusers', (req, res) => {
    connection.query('SELECT * from users', (error, results, fields) => {
        if(error) throw error;
        res.statusCode = 200;
        res.send(results);
        console.log(results);
    });
});

// app.get('/adduser1', (req, res) => {
//     let user = {name: 'User1', profile_word: 'Salutations Everybody!!', profile_pic: '', user_id: 'user1', email: 'user1@salutations.com', birthdate: '2022/07/07'};
//     let sql = 'INSERT INTO users SET ?';
//     let query = connection.query(sql, user, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('User1 Added...');
//     });
// });

// app.get('/adduser2', (req, res) => {
//     let user = {name: 'User2', profile_word: 'Greetings Everyone!!', profile_pic: '', user_id: 'user2', email: 'user2@greetings.com', birthdate: '2022/07/07'};
//     let sql = 'INSERT INTO users SET ?';
//     let query = connection.query(sql, user, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('User2 Added...');
//     });
// });

// app.get('/getusers', (res, req) => {
//     let sql = 'SELECT * from users';
//     let query = connection.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         req.send('Users fetched...');
//     });
// });

app.listen(80, () => {
    console.log('Server started at port 80');
});




// connection.query('INSERT into users VALUES (0, "User1", "Salutations!", "", "user1@salutations.com", "", "2022/07/08");', (error, results, fields) => {
//   if(error) throw error;
//   console.log(results);
// });

// connection.query('SELECT * from rooms', (error, results, fields) => {
//     if(error) throw error;
//     console.log(results);
// });

// connection.query('SELECT * from participate', (error, results, fields) => {
//     if(error) throw error;
//     console.log(results);
// });

// connection.query('SELECT * from messages', (error, results, fields) => {
//     if(error) throw error;
//     console.log(results);
// });

// connection.end();











