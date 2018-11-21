const express = require("express");
const router = express.Router();
const Campground = require("../models/campgrounds");
const middleware = require("../middleware");


// Index Route - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});  
        }
    });
});

// CREATE Route - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    //get data from Form and add to campgrounds array
        let name = req.body.name;
        let image = req.body.image;
        let description = req.body.description;
        let author = {
            id: req.user._id,
            username: req.user.username
        };
        let newCampground = {name: name, image:image, description:description, author: author};
    // Create new campground and save to DB
        Campground.create(newCampground, function(err, newlyCreated){
            if(err){
                console.log(err);
            }
            else {
                //res.render back to campgrounds page
                res.redirect("/campgrounds");
            }
        });
});

// NEW Route - show the form to create a new campground object
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

// SHOW Route - shows more info about one camp
router.get("/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground) {
            console.log(err);
            req.flash("error", "Campground not found.");
            res.redirect("back");
        }
        else {
            //console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT Campground Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, middleware.isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE Campground Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
     Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }
        else {
            res.redirect(`/campgrounds/${req.params.id}`);
        }
    });
});

// Destroy Campground Route
router.delete("/:id", middleware.checkCampgroundOwnership, middleware.isLoggedIn, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});



module.exports = router;