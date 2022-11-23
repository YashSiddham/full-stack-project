const mongoose = require("mongoose");
const User = require("./models/User");

User.create(
    {
        first_name: "Yashtest",
        last_name: "Siddhamtest",
        license_no: "1111-2222-3333-4444",
        age: 79,
        car_details: {
            make: "Porsche",
            model: "911",
            year: 2023,
            plate_no : "NAMA3TE"
        }
    },
    (error, user) => {
        console.log(error, user);
    }
);
