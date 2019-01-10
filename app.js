const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const Campground = require("./models/campgrounds");
const Comment = require("./models/comment");
const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const seedDB = require("./seeds");
require("dotenv").config();


//-------Requiring Routes-------------//
const commentRoutes = require("./routes/comments");
const campgroundRoutes = require("./routes/campgrounds");
const indexRoutes = require("./routes/index");


//seedDB();

mongoose.connect(process.env.DATABASEURL);

//mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
//mongoose.connect("mongodb://yelpcampadmin:p123456@ds153314.mlab.com:53314/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// Passport Configuration
app.use(require("express-session")({
    secret: "I hail from the stars",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);





app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Started...");
});





















// let campgrounds = [
//     {name: "Salmon Creek", image: "https://images.pexels.com/photos/884186/pexels-photo-884186.jpeg?cs=srgb&dl=creek-daytime-environment-884186.jpg&fm=jpg"},
//     {name: "Granite Hill", image: "https://images.pexels.com/photos/733031/pexels-photo-733031.jpeg?cs=srgb&dl=background-clouds-countryside-733031.jpg&fm=jpg"},
//     {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/270736/pexels-photo-270736.jpeg?cs=srgb&dl=adventure-bench-clouds-270736.jpg&fm=jpg"},
// ]