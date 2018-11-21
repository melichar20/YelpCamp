const express = require("express");
const router = express.Router({mergeParams: true});
const Campground = require("../models/campgrounds");
const Comment = require("../models/comment");
const middleware = require("../middleware");


//--------Comments New------------//
router.get("/new", middleware.isLoggedIn, (req, res) => {
    //Find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
        } 
        else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// Create Route - add new comment to DB
router.post("/", middleware.isLoggedIn, (req, res) => {
    //Lookup campground by ID
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } 
        else {
            //Creat new comment
            Comment.create(req.body.comment, (err, comment) => {
                if(err){
                    req.flash("error", "Something went wrong.");
                    console.log(err);
                }
                else {
                    //Connect new comment to campground
                    //add usernamd and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    req.flash("success", "Successfully added comment.");
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    });
});

// Comments Edit Route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err || !foundCampground) {
            req.flash("error", "No campground fround.");
            return res.redirect("back");
        }
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if(err){
                res.redirect("back");
            }
            else {
                res.render  ("comments/edit", {campground_id: req.params.id, comment: foundComment});
            }
        });
    });
});

// Comment Update Route
router.put("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if(err){
            res.redirect("back");
        }
        else {
            res.redirect(`/campgrounds/${req.params.id}`);
        }
    });
});

// Comment Destroy Route
router.delete("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id, (err) => {
        if(err){
            res.redirect("/back");
        }
        else {
            req.flash("success", "Comment deleted.");
            res.redirect(`/campgrounds/${req.params.id}`);
        }
    }); 
});



module.exports = router;