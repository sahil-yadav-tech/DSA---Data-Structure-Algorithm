// import * as jsonwebtoken from 'jsonwebtoken';
// import { JWT_TOKEN_TYPES } from '../global/constants';

// class JWT {
//     static _instance;
//     JWTIssuer = 'BANDHAN_AMC';
//     jwtKeys = {};

//     constructor(options) {
//         if (!JWT._instance) {
//             this.jwtKeys = {
//                 [JWT_TOKEN_TYPES.ACCESS_TOKEN]:
//                     options.ACCESS_TOKEN_JWT_SECRET_KEY,

//                 [JWT_TOKEN_TYPES.PASSCODE_TOKEN]:
//                     options.PASSCODE_TOKEN_JWT_SECRET_KEY,

//                 [JWT_TOKEN_TYPES.IMPS_TOKEN]:
//                     options.IMPS_TOKEN_JWT_SECRET_KEY,

//                 [JWT_TOKEN_TYPES.WHATSAPP_TOKEN]:
//                     options.WHATSAPP_TOKEN_JWT_SECRET_KEY,

//                 [JWT_TOKEN_TYPES.QUICK_ACTIONS_TOKEN]:
//                     options.QUICK_ACTIONS_TOKEN_JWT_SECRET_KEY
//             };

//             JWT._instance = this;
//         }

//         return JWT._instance;
//     }

//     static getInstance() {
//         return this._instance;
//     }

//     verifyToken(token, type) {
//         return jsonwebtoken.verify(
//             token,
//             this.jwtKeys[type]
//         );
//     }

//     generateToken(payload, type, expiry, options = {}) {
//         return jsonwebtoken.sign(
//             payload,
//             this.jwtKeys[type],
//             {
//                 expiresIn: expiry,
//                 issuer: this.JWTIssuer,
//                 ...options
//             }
//         );
//     }
// }

// export { JWT };