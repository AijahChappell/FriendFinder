const express = require("express");
const bodyParser = require ("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const friends = require("./app/data/friends");
const PORT = process.env.PORT || 8080;
const app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.listen(PORT, function() {
    console.log("Server started and listening on port: " + PORT);
});