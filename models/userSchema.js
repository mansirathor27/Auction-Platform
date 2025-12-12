import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength: [3, "Username must contain atleast 3 character"],
        maxLength: [40, "Username can not exceed 40 characters"],
    },
    password: {
        type: String,
        selected: false,
        minLength: [8, "Password must contain atleast 8 character"],
        maxLength: [32, "Password can not exceed 32 characters"],
    }, 
    email: String,
    address: String,
    phone: {
        type: String,
        selected: false,
        minLength: [11, "Phone number must contain 11 digits"],
        maxLength: [11, "Phone number must contain 11 digits"],
    },
    profileImage: {
        public_id: {
            type: String, 
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    paymentMethods: {
        bankTransfer: {
            bankAccountNumber: String,
            bankAccountName: String,
            bankName: String,
        },
        upi: {
            upiId: String, // could be Google Pay / PhonePe / Paytm UPI ID
        },
        paypal: {
            paypalEmail: String,
        },
        role: {
            type: String,
            enum: ["Auctioneer", "Bidder", "Super Admin"]
        },
        unpaidCommission: {
            type: Number,
            default: 0,
        },
        auctionsWon: {
            type: Number,
            default: 0,
        },
        moneySpent: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
});