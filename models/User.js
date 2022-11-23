const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// Defining the User Schema
// Nesting car_details object inside the User object
const UserSchema = new Schema({
    first_name: {type: String, default: "default"},
    last_name: {type: String, default: "default"},
    license_no: {type: String, default: "default"},
    age: {type: Number, default: 0},
    // dob: {type: Date, default: new Date("1/12/2000")},
    credentials: {
      username: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      user_type: {type: String, default: "Driver"}
    },
    car_details: {
        make: {type: String, default: "default"},
        model: {type: String, default: "default"},
        year: {type: Number, default: 0},
        plate_no : {type: String, default: "default"}
    }
});

UserSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.credentials.password, 10, (error, hash) => {
        user.credentials.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

// Exporting the User model
module.exports = User;
