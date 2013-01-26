/*
 * Module dependencies
 */
 
 
exports.index = function() {
  return function index(req, res, next) {
    res.locals("version", function(done){
      done(null, "0.0.1");
    });
    res.render("index");
  }
}