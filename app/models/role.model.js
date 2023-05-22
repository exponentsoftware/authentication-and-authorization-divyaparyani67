const mongoose = require("mongoose");

// Import the `Schema`
const { Schema } = mongoose;

// Define the role schema
const roleSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

// Create the role model
const Role = mongoose.model("Role", roleSchema);

// Export the Trolemodel
module.exports = Role;
