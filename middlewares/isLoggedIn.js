module.exports = (req, res, next) => {
    loggedIn = req.session.userId ? true : false;
    console.log(`GLOBAL isDriver : ${global.isDriver}`);
    // try {
    //     loggedIn = req.session.userId ? true : false;
    // }catch (e){
    //     console.log(e);
    //     loggedIn = false;
    // }

    next();
};