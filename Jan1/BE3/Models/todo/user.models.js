import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // name:String,
    // email:String,
    // password:String

    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
    },
    password: {
      type: String,
      // required :true,
      reuired: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
