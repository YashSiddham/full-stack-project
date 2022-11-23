module.exports = (req, res, next) => {
    console.log("isAuthenticated Middleware called");
    if (!req.session.userId) return res.redirect("/login");
    next();
};