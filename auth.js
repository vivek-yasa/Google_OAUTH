const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "840048742468-m3q38qigsssrktce0okcd3c4d4m0c4br.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
async function(request, accessToken, refreshToken, profile, done) {
  try {
    return done(null, profile);
  } catch (error) {
    return done(error, null);
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
