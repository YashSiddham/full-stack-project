require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const User = require("./models/User");

// Initializing Express
const app = express();
const port = 3000;

// Importing Middlewares
const isAuthenticatedMiddleware = require("./middlewares/isAuthenticated");
const loggedInMiddleware = require("./middlewares/isLoggedIn");

// Importing Controllers
const homeController = require("./controllers/home");
const g2Controller = require("./controllers/g2");
const gController = require("./controllers/g");
const loginController = require("./controllers/login");
const signUpController = require("./controllers/signUp");
const fetchUserDetailController = require("./controllers/fetchUserDetail");
const storeG2Controller = require("./controllers/storeG2");
const updateUserDetailController = require("./controllers/updateUserDetail");
const newUserController = require("./controllers/createNewUser");
const authenticateUserController = require("./controllers/authenticateUser");
const logOutController = require("./controllers/logOut");

// Commenting out my connection string
// mongoose.connect("mongodb+srv://Yash46:atlasAtlas@fullstackdev46.vhmyvfb.mongodb.net/winter22?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
// });
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

app.use(expressSession({secret: "siddh797", resave: false, saveUninitialized: true}));
app.use(express.json());
app.use("*", loggedInMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.get("/", homeController);
app.get("/g2", isAuthenticatedMiddleware, g2Controller);
app.get("/g", isAuthenticatedMiddleware, gController);
app.get("/login", loginController);
app.get("/logOut", logOutController);
app.get("/signUp", signUpController);
app.post("/login", authenticateUserController);
app.post("/signUp", newUserController);
app.post("/g", isAuthenticatedMiddleware, fetchUserDetailController);
app.post("/g2", isAuthenticatedMiddleware, storeG2Controller);
app.post("/updateUserDetail", isAuthenticatedMiddleware, updateUserDetailController);
