module.exports = (req, res) => {
    res.render("signUp", {userCredentials: {matchingPasswords: true}});
    // Passwords on blank page or initial load always match
};