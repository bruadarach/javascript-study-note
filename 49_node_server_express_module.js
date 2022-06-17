/*
npm install express
( npm install body-parser) => Express v4.16.0 부터는 body-parser를 따로 설치 하지 않고, Express 내장 미들웨어인 express.json()을 사용합니다.
npm install cors
 */


// create a server
const express = require('express')
const app = express()
const port = 4999;
const ip = 'localhost'; 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CORS
const cors = require('cors');
app.use(cors());

// express.json() : parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json({strict: false})); 

app.post('/lower', (req, res) => {
    console.log(req.body) // check the request body
    res.send(JSON.stringify(req.body.toLowerCase())) // res.send(JSON.stringify(req.body))
});

app.post('/upper', (req, res) => {
  console.log(req.body) // check the request body
  res.json(req.body.toUpperCase()) // res.json(req.body)
})

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

// execute a server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})