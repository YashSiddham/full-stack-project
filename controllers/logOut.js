module.exports = async(req, res) => {
    global.isDriver = null;
    loggedIn = false;
    req.session.destroy(() => {
        res.redirect("/login");
    });

    // Destroying session data and setting global variables to null when logging out
};