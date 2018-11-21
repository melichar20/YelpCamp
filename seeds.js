const mongoose = require("mongoose");
const Campground = require("./models/campgrounds");
const Comment = require("./models/comment");


let data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor amet meggings ethical salvia, dreamcatcher tote bag franzen neutra actually banjo asymmetrical. Pour-over meggings brunch blue bottle tacos ethical ugh selvage disrupt flannel listicle cliche letterpress. Lo-fi artisan crucifix, drinking vinegar XOXO everyday carry offal unicorn. Yr offal subway tile, iPhone raclette palo santo blog salvia try-hard dreamcatcher next level coloring book direct trade poke occupy. Etsy umami meggings, fashion axe echo park hell of kinfolk retro vape church-key occupy. Hella yr hexagon squid copper mug chambray iceland retro succulents beard vexillologist bushwick sustainable slow-carb lyft."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor amet meggings ethical salvia, dreamcatcher tote bag franzen neutra actually banjo asymmetrical. Pour-over meggings brunch blue bottle tacos ethical ugh selvage disrupt flannel listicle cliche letterpress. Lo-fi artisan crucifix, drinking vinegar XOXO everyday carry offal unicorn. Yr offal subway tile, iPhone raclette palo santo blog salvia try-hard dreamcatcher next level coloring book direct trade poke occupy. Etsy umami meggings, fashion axe echo park hell of kinfolk retro vape church-key occupy. Hella yr hexagon squid copper mug chambray iceland retro succulents beard vexillologist bushwick sustainable slow-carb lyft."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor amet meggings ethical salvia, dreamcatcher tote bag franzen neutra actually banjo asymmetrical. Pour-over meggings brunch blue bottle tacos ethical ugh selvage disrupt flannel listicle cliche letterpress. Lo-fi artisan crucifix, drinking vinegar XOXO everyday carry offal unicorn. Yr offal subway tile, iPhone raclette palo santo blog salvia try-hard dreamcatcher next level coloring book direct trade poke occupy. Etsy umami meggings, fashion axe echo park hell of kinfolk retro vape church-key occupy. Hella yr hexagon squid copper mug chambray iceland retro succulents beard vexillologist bushwick sustainable slow-carb lyft."
    }
];


function seedDB(){
    // Remove all camps
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // else {
        //     console.log("Removed Campgrounds...");
        //     // Add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //              if(err){
        //                  console.log(err);
        //              }
        //              else {
        //                  console.log("Added a campground...");
        //                  console.log(campground);
        //                  // Add a few comments
        //                  Comment.create(
        //                      {
        //                          text: "This place is great, the sunrises are so nice...!",
        //                          author: "Homer"
        //                      }, function (err, comment){
        //                          if(err){
        //                              console.log(err);
        //                          }
        //                          else {
        //                              campground.comments.push(comment);
        //                              campground.save();
        //                              console.log("Created new comment..");
        //                          }
        //                      });
        //              }
        //         }); 
        //     });
        // }
    });
}

module.exports = seedDB;
