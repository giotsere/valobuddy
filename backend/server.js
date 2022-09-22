const express = require('express');
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB;
const port = process.env.PORT;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
