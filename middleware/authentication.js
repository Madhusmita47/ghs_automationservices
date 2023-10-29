const jwt = require('jsonwebtoken')
 
async function authenticateToken(req, res, next) {
     const authHeader = req.headers['authorization']
     const token = authHeader && authHeader.split('Bearer ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Token is not present' });
    }

    
  jwt.verify(token, 'secret key', (err, decoded) => {
        if (err) {
            console.log('Error:', err.message);
            return res.status(403).json({ error: 'Token is Invalid' });;
      }
     
      req.user = decoded.user;
    //   console.log(req.user)
        next();
    });
}

module.exports = {authenticateToken};


















// function authenticateToken(req, res, next) {
//     // const authHeader = req.headers['authorization']
//     // const token = authHeader && authHeader.split('Bearer ')[1]
//     // console.log('token', token)
//     // if (token == null) {
//     //     return res.sendStatus(401)
//     // }
//     const token = req.headers['x-api-key'];

//     if (!token) {
//         return res.sendStatus(401);
//     }
    

//     jwt.verify(token, "secret key", (err, user) => {
//         if (err) {
//             console.log('Error:', err.message)
//             return res.sendStatus(403)
//         }
//         // console.log(user)
//         req.user = user
//         next()
//     })
// }

// module.exports = authenticateToken;