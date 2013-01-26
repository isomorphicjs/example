/*
 * Module dependencies
 */
var app = require("./app")
  , isomorphic = require("isomorphic")
  , root = document.getElementsByTagName("html")[0];
 
/*
 * Mount our app at the root
 */
isomorphic.init(root, app);
