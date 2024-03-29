require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const mongoDB = process.env.MONGODB;
const sessionSecret = process.env.SECRET;
const port = process.env.PORT;
const cors = require('cors');
const passport = require('passport');

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

app.use(
  cors({
    credentials: true,
    origin: [
      'https://valobuddy.netlify.app',
      'http://127.0.0.1:3001',
      'https://valobuddy.tsereteli.dev',
    ],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1);
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongoDB,
      collectionName: 'sessions',
    }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
      secure: true,
      sameSite: 'none',
    },
  })
);

require('./auth/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/registration', registrationRouter);
