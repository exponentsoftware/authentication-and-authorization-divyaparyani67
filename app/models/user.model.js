const mongoose = require("mongoose");

// Import the `Schema` 
const { Schema } = mongoose;

//  tutorial schema
const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

// Create the user model
const User = mongoose.model("User", userSchema);

// Export the user model
module.exports = User;
