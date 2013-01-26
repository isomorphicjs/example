/*
 * Module dependencies
 */
var isomorphic = require("isomorphic")
  , ism = require("ism")
  , versionDirective = require("./directives/version")
  , userDirective = require("./directives/user")
  , versionFilter = require("./filters/version")
  , index = require("./routes/index")
  , user = require("./routes/user");
 
/*
 * Expose the app
 */
var app = module.exports = isomorphic();
 
app.configure(function () {
  app.set("view engine", "ism");
  app.engine("ism", ism.__express);

  // ism config
  /*
   * directives
   */
  ism.directive(versionDirective);
  ism.directive(userDirective);
   
  /*
   * filters
   */
  ism.filter("cool-version", versionFilter);
});

app.platform("server", function() {

  // Enable view streaming
  // app.set("streaming", true);
 
  // enables/disables server side rendering
  // can also be set per request
  // Defaults to false
  // app.set("server render", true);

  
  // Log our requests
  app.use(isomorphic.logger("dev"));

  // Serve our static assets
  app.use("/assets", isomorphic.static("build"));

  // render the page in the server for bots
  app.use(isomorphic.bots());
});
 
/*
 * routes
 */
app.get("/", index.index());
app.get("/users/:user", user.get());
app.post("/users/:user", user.update());
