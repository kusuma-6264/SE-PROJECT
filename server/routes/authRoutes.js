/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import express from 'express';

import User from '../mongodb/models/user.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = User.findOne({
            email: email
        })
        if (user) {
            console.log(user)
            res.status(200).json({ success: true, data: posts });
        } else {

            res.status(500).json({ success: false, message: "Invalid Email or Password.", data: null });
        }
    } catch (error) {
        res.status(200).json({ success: true, data: posts });
    }
})

router.post('/signup', async (req, res) => {
    try {

        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(200).json({ success: true, data: posts });
    }
})

export default router;
