const passport = require("passport");
const { localStrategy } = require("./strategies")
const {session, userSerializer, userDeserializer} = require("./session");


passport.use(localStrategy);

passport.serializeUser(userSerializer);
passport.deserializeUser(userDeserializer);

module.exports = { passport, session };