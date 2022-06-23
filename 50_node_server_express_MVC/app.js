const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors()); //CORS
app.use(express.json({strict: false})); // JSON Parser
app.use(morgan('dev')); // Logger

const port = 3001;

const membersRouter = require('./router/members');
app.use('/members', membersRouter)

app.get('/', (req, res) => {
  //res.sendStatus(200);
  res.status(200).send('Welcome!')
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

const server = app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
