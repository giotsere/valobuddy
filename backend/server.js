require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB;
const cors = require('cors');
const port = process.env.PORT;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const registrationRouter = require('./routes/registration');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/profile', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/', registrationRouter);
