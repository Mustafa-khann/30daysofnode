const express = require('express');
const app = express();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

app.use(passport.initialize());

passport.serializeUser((user, cb)=>{
  cb(null, user.id);
});
passport.deserializeUser((id, cb)=>{
  cb(null, id);
});
passport.use(new GitHubStrategy({
    clientID: "c62cd6617e4cf4acee73",
    clientSecret: "db797d010dfa48b66e54b3d97c393db25eefaa7a",
    callbackURL: "http://localhost:3000/api/auth/github"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
    cb(null, profile);
  }
));

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');

})
// auth
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/api/auth/github', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(3000, () => {
    console.log('Server is running on Port: 3000');
})