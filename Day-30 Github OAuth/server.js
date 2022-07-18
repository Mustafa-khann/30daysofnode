const express = require('express');
const app = express();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "c62cd6617e4cf4acee73",
    clientSecret: "9860a4921379009936c9addb3c8fd633ed99cc46",
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
    cb(null, profile);
  }
));

app.get('/', (req, res) => {
    res.send(__dirname + '/dashboard.html');
})

app.get('/login', (req, res) => {
    res.send(__dirname + '/login');

})
// auth
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(3000, () => {
    console.log('Server is running on Port: 3000');
})