require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB;

const port = process.env.PORT;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const registrationRouter = require('./routes/registration');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/register', registrationRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
