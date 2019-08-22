const express = require("express");
const bodyParser = require ("body-parser");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(PORT, function() {
    console.log("Server started and listening on port: " + PORT);
});