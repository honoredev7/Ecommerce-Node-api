import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName : {
      type : String,
      trim : true,
      required : true
    },
    lastName : {
      type : String,
      trim : true,
      required : true
    },
    email : {
      type : String,
      trim : true,
      required : true,
      unique : true
    },
    phone : {
      type : Number,
      required : true
    },
    address : {
      type : String,
      trim : true
    },
    password : {
      type : String,
      trim : true,
      required : true,
      min : 7,
      max : 70
    },
    isAdmin : {
      type : Boolean,
      default : false
    },
  },
  { timestamps : true }
);

export default mongoose.model("User", userSchema);
