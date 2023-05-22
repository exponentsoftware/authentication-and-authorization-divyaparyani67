const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.DB_URL;
db.tutorials = require("./tutorial.model");
db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["creator", "editor", "viewer"];

module.exports = db;
