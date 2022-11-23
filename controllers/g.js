const User = require("../models/User");
module.exports = async (req, res) => {

    const user = await User.findOne({
        _id: req.session.userId,
    });

    if (user.license_no == "default"){
        res.redirect("/g2");
    }else {
        const userDetail = user;      // Passing an empty object since user will not be fetched
                                    // on an initial GET request
        res.render("g", {userDetail});
    }

};