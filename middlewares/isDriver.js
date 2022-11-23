const User = require("../models/User");

module.exports = (req, res, next) => {
    isDriver = false;

    User.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            return res.redirect("/");
        } else {
            console.log(`INSIDE ELSE isDriver Middleware`);
            isDriver = user.credentials.user_type == "driver" ? true : false;
            console.log(`USER TYPE : ${user.credentials.user_type}`);
        }
    });

    console.log(`isDriver Middleware called : ${isDriver}`);
    next();
};