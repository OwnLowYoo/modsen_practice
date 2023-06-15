import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const googleToken = token.length > 1000;
        if (googleToken) {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            req.user = {
                id: payload.sub,
                name: payload.name,
                ava: payload.picture,
                role: 'basic',
            };
        } else {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const { id, name, ava, role } = decodedToken;
            req.user = { id, name, ava, role };
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Что-то пошло не так!',
        });
    }
};

export default auth;