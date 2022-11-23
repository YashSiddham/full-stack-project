const User = require("../models/User");

module.exports = async (req, res) => {

    try {
        if (req.body.password == req.body.repeatPassword) {
            await User.create({                     // Saving user details to the User Collection
                credentials: {
                    username: req.body.username,
                    password: req.body.password,
                    user_type: req.body.userType
                }
            });
            res.redirect("/login"); // Redirecting to login on successful user creation
        } else {
            // Displaying error message if passwords do not match
            res.render("signUp", {
                userCredentials: {
                    username: req.body.username,
                    password: req.body.password,
                    repeatPassword: req.body.repeatPassword,
                    matchingPasswords: false

                }
            });
        }
    }catch (e) {
        // Displaying error message on signup page if username is already in use
        if(e.message.includes("E11000 duplicate key error")){
            res.render("signUp", {
                userCredentials: {
                    username: req.body.username,
                    password: req.body.password,
                    repeatPassword: req.body.repeatPassword,
                    matchingPasswords: true,
                    usernameConflict: true
                }
            });
        }
    }
};