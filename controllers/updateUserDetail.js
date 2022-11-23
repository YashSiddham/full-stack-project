const User = require("../models/User");
module.exports = async (req, res) => {

    // Using findByIdAndUpdate to set the changed fields (Only car_details will be updated)
    const userDetail = await User.findByIdAndUpdate({_id:req.body._id}, {car_details:{
            "make": req.body.make,
            "model": req.body.model,
            "year": req.body.year,
            "plate_no": req.body.plateNumber,
        }},{upsert:true, returnDocument: "after"});       // Using upsert to selectively update only Car details object
                                        // and ignore the Personal Details even if sent by the front end
    res.render('g', {userDetail});
};