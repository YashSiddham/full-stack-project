const User = require("../models/User");

module.exports = async (req, res) => {

    // Using the findOne function to search user by License Number
    const userDetail = await User.findOne({
        license_no: req.body.license_no,
    }).lean();

    if (userDetail != null){            // Fetching user details and rendering the G page with
        res.render("g", {userDetail});  // Rendering G page with added User Details, if user is found

    }else{
        res.redirect("/g2");    // redirecting user to the G2 page if license number is not found
    }
};