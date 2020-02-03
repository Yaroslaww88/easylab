let verdict = (success, message) => {
    return {
        success: success,
        message: message
    }
}

exports.login = (req, res, next) => {

    console.log(req.body)
    let username = req.body.username
    let password = req.body.password

    if (username && password) {
        return res.json({success: true, token: 'kappa'})
    } else {
        return res.json(verdict(false, 'Username or/and password is not supplied'))
    }
}


exports.register = (req, res, next) => {

    let username = req.body.username
    let password = req.body.password

    if (username && password) {
        return res.json({success: true, token: 'kappa'})
    } else {
        return res.json(verdict(false, 'Username or/and password is not supplied'))
    }
}

exports.auth = (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length)
    }

    if (token) {
        if (token === 'kappa') {
            return res.json(verdict(false, 'Token is not valid'))
        } else {
            return res.json(verdict(false, 'Token is invalid'))
        }
    } else {
        return res.json(verdict(false, 'Auth token is not supplied'))
    }
}