const User = require("../models/User");
module.exports =async (req, res) => {
    
    try {
        const user = await User.findOne({
            _id: req.session.userId,
        });
        if (user.license_no !== "default") {
            res.redirect("/g");
        }else{
            res.redirect("/g2");
        }
    } catch (e) {
        console.log(e);
    }
    return;
};