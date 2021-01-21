const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const entriesRouter = require('./routes/entries');
const draftsRouter = require('./routes/drafts')
const quotesRouter = require('./routes/quotes')
const likesRouter = require('./routes/likes');
const commentsRouter = require('./routes/comments');


const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/entries', entriesRouter);
app.use('/api/quotes', quotesRouter);
app.use('/api/drafts', draftsRouter)
app.use('/api/likes', likesRouter);
app.use('/api/comments', commentsRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
});