import mongoose from "mongoose";

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://tanishseth0510:Tanish05@cluster0.nnou0am.mongodb.net/blog-app');
    console.log("DB Connected");
}