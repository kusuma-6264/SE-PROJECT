// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: { type: String, required: true },
    profileImg: { type: String },
    email: { type: String, required: true },
    phoneNo: { type: String },
    gender: { type: String, default: 'MALE' },
    age: { type: Number },
    password: { type: String },
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
    },
});

const UserSchema = mongoose.model('users', User);

export default UserSchema;
