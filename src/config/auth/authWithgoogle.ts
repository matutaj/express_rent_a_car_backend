import passport, { use } from "passport"


const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "217870152963-7oa5lgdtabc1nv8esj3mveaae6vh5eul.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

interface IRequest {
  request: any
  accessToken: any,
  refreshToken: any,
  profile: any,
  done: any
}

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/",
  passReqToCallback: true
},
  function ({ request, accessToken, refreshToken, profile, done }: IRequest) {
    return done(profile, done);

  }
));

passport.serializeUser((user, done) => {
  return done(null, user)
});
