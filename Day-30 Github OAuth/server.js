const express = require('express');
const app = express();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    httpOnly: true,
    secure: false,
    maxAge: 24*60*60*1000,
   }
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb)=>{
  cb(null, user.id);
});
passport.deserializeUser((id, cb)=>{
  cb(null, id);
});
passport.use(new GitHubStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.SECRETKEY,
    callbackURL: "http://localhost:3000/api/auth/github"
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
    cb(null, profile);
  }
));
const isAuth = ((req,res,next)=>{
  if(req.user)
  {
    next();
  }
  else{
    res.redirect("/login")
    }
});
app.get('/dashboard', isAuth, (req, res) => {
  console.log(req.user);
    res.sendFile(__dirname + '/dashboard.html');
})

app.get('/login', (req, res) => {
  if(req.user){
    return res.redirect('/dashboard')
  }
    res.sendFile(__dirname + '/login.html');
})
app.get('/logout', (req, res) => {
  req.logOut();
    res.redirect('/login');
})
// auth
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/api/auth/github', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

app.listen(3000, () => {
    console.log('Server is running on Port: 3000');
})