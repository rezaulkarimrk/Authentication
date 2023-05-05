const User = require("../models/user.model");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy( async (username, password, done) => {

        try {
            const user = await User.findOne({username: username});
            if(!user){
                return done(null, false, {message: "incorrect user"});
            }
            if(!bcrypt.compare(password, user.password)){
                return done(null, false, {message: "incorrect Password"});
            }
            return done(null, user)
        } catch (error) {
            return done(error);
        }
    }
));

// create session id
//whenever we login it, create user id inside session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// find session id using session information
passport.deserializeUser( async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});