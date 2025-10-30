const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },

  // Store hashed password (not plain text)
  password: { type: String, required: true, select: false },

  // Main login email (personal email)
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },

  // Role of the user in the college community
  role: { type: String, enum: ["Student", "Teacher", "Alumni"], default: "Student", required: true },

  // College verification details
  collegeEmail: { type: String, lowercase: true, trim: true },
  isVerifiedMember: { type: Boolean, default: false },

  // Basic profile fields
  bio: { type: String, maxlength: 300 },
  batch: { type: String },
  department: { type: String },

  // For OAuth support later
  oauthProvider: { type: String, enum: ["manual", "google", "github"], default: "manual" },
  oauthId: { type: String }, // e.g., Google user ID

  // Metadata
  profilePic: { type: String },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
