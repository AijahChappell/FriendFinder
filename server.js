const express = require("express");
const bodyParser = require ("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const friends = require("./app/data/friends");
