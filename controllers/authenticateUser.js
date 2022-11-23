const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = (req, res)=> {

    let {_username, password} = req.body;
    _username=req.body.username;
    User.findOne({
        "credentials.username":_username
    }, (error, user) => {
        if (user) {

            // Comparing user entered password with the hashed password in the database
            bcrypt.compare(password, user.credentials.password, (error, same) => {
                if (same){
                    req.session.userId = user._id;
                    // Creating global variables for checking if user type is driver or admin
                    global.isDriver = user.credentials.user_type == "driver" ? true:false;
                    global.isAdmin = user.credentials.user_type == "admin" ? true:false;
                    if(user.first_name == "default"){
                        global.isDriver? res.redirect("/g2"): res.redirect("/");
                    }else{
                        let userDetail = user;
                        global.isDriver? res.redirect("/g"): res.redirect("/");
                    }

                } else {
                    // Redirecting to signup if credentials do not match
                    res.redirect("/signUp");
                }
            });
        }else {
            // If user does not exist, redirecting to signup
            res.redirect("/signUp");
        }
    });

};