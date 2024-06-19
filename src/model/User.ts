import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    Username: string;
    email: string;
    Password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    Username:{
        type:String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    email:{
        type:String,
        required: [true, "Email is required"], 
        unique:true,
        match:[ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"]
    },
    Password:{
        type:String,
        required: [true,"Password is required"],
        unique: true
    },
    verifyCode:{
        type:String,
        required: [true,"Verify Code is required"],
        unique: true
    },
    verifyCodeExpiry:{
        type:Date,
        required: [true,"Verify Code expiry is required"],
        unique: true

    },
    isVerified:{
        type: Boolean,
        default: false
    }, 
    isAcceptingMessage:{
        type: Boolean,
        default: false
    },
    messages:[MessageSchema]
})