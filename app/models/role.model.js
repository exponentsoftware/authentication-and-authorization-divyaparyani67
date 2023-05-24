const mongoose = require("mongoose");

// Import the `Schema`
const { Schema } = mongoose;

// Define the role schema
const roleSchema = new Schema({
  name: String,
});

// Create the role model
const Role = mongoose.model("Role", roleSchema);

// Export the Trolemodel
module.exports = Role;
