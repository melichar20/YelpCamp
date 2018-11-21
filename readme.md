
RESTFUL ROUTES

Example:

name     url                 verb        desc.
==========================================================================
INDEX    /campgrounds        GET         Display a list of all camps
NEW      /campgrounds/new    GET         Display form to make a new camps
CREATE   /campgrounds        POST        Add a new campground to DB
SHOW     /campgrounds/:id    GET         Shows info about one campground

NEW      /campgrounds/:id/comments/new
CREATE   /campgrounds/:id/comments


REST - mapping out HTTP routes to CRUD functionality

Create
Read
Update
Destroy

7 RESTful routes:

Example: Dogs                                                                               Mongoose Methods
=========================================================================================================
Index   /dogs           GET         List all items                                          Dog.find()
New     /dogs/new       GET         Show new item form                                      N/A
Create  /dogs           POST        Create new item, then redirect somewhere                Dog.create()
Show    /dogs/:id       GET         Show info about one specific item                       Dog.findById()
Edit    /dogs/:id/edit  GET         Show edit form for one dog                              Dog.findById()
Update  /dogs/:id       PUT         Update a particular item, then redirect somewhere       Dog.findByIdAndUpdate()
Destroy /dogs/:id       DELETE      Delect a particular item, then redirect somewhere       Dog.findByIdAndRemove()



