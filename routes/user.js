/*
 * Module dependencies
 */
 
module.exports.get = function() {
  return function(req, res, next) {
    // Set the user
    res.locals("user", {name: "Cameron"});

    // Render the user
    // The callback will only be called on the client
    res.render("user", function () {
      setTimeout(function(){
        res.locals("user", {name: "Tim"});
      }, 1000);
    });
  }
}
 
module.exports.update = function() {
  return function(req, res, next) {
    // call a service and update
    res.redirect(req.url);
  }
}