/*
 * Module dependencies
 */
var app = require("./app")
  , runner = require("runner")
  , root = document.getElementsByTagName("html")[0];
 
/*
 * Mount our app at the root and run it
 */
runner.init(root, app);
