function addUser(object, user) {
    if (user) {
        let userObj;
        if (user.value) {
            userObj = user.value;
        } else {
            userObj = user;
        }
        object.user = userObj;
    }
    return object;
}

String.isNullOrWhitespace = function (i) {
    return typeof i !== 'string' || !i.trim();
}

function ensureLogged(req, res, next) {
    if (!req.user) 
        res.redirect('/');
    else 
        next();
    }

module.exports = {
    addUser,
    ensureLogged
};