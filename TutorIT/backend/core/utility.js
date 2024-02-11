const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const utility = {};


utility.createPassword = (rand, password) => {
    var newPassword = rand + password;
    return crypto.createHash('sha512').update(newPassword).digest("hex");
}


utility.createJwtToken = (data) => {
    return jwt.sign(data, 'shhhhh');
}

utility.loginRequired = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ success: false, code: 401, msg: 'Unauthorized user!' });
        // res.redirect('/user/login');
    }
};

// utility.jwtAuth = async (req, res, next) => {
//     const token = req.session.token;

//     if (token == null) return res.redirect('/user/login')

//     jwt.verify(req.session.token, "shhhhh", function (err, decode) {
//         // console.log(err)

//         if (err) return res.redirect('/user/login')

//         req.user = decode;
//         next()
//     })
// }

utility.jwtAuth = async (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.success = (obj = {}) => {
        let newObj = {
            status: "Success",
            statusCode: 200,
            msg: common.sucessMSG
        };
        let x;
        for (x in obj) {
            newObj[x] = obj[x];
        }
        res.status(200);
        return res.send(newObj);
    }

    res.error = (obj = {}) => {
        let newObj = {
            status: "Error",
            statusCode: 500
        };
        let x;
        for (x in obj) {
            newObj[x] = obj[x];
        }

        res.status(500);
        return res.send(newObj);
    }

    let arr_allowed = ['/', ''];

    if (arr_allowed.indexOf(req._parsedUrl.pathname) >= 0) {
        next()
    }
    else {

        if (req.headers && req.headers.authorization) {

            jwt.verify(req.headers.authorization, "shhhhh", function (err, decode) {

                console.log(err)
                if (err) {
                    req.user = undefined;
                    if (err.name == "TokenExpiredError") {
                        return res.status(200).json({ success: false, code: 419, msg: 'Token expires, Please login!!' });
                    } else {
                        utility.loginRequired(req, res, next);
                    }

                } else {
                    req.user = decode;
                    utility.loginRequired(req, res, next);
                }
            })

        } else {
            req.user = undefined;
            utility.loginRequired(req, res, next);
        }
    }
}

module.exports = utility;