const User = require("../models/User");

module.exports = async (req, res) => {
    console.log(req.session.userId)

    // Updating user details with upsert since it contains default values
    const userDetail = await User.findByIdAndUpdate({_id:req.session.userId}, {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        license_no: req.body.license,
        age: req.body.age,
        car_details:{
            "make": req.body.make,
            "model": req.body.model,
            "year": req.body.year,
            "plate_no": req.body.plateNumber,
        }},{upsert:true, returnDocument: "after"});

    res.render("g", {userDetail});
};