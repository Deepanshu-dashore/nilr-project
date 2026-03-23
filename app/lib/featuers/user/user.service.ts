import { connectDB } from "../../db/connectDB";
import { hashPassword } from "../../security/password";
import { User } from "./user.model";

export class UserService {
    static async registerUser(name:string,email:string,password:string){
        await connectDB()
        const hashedPassword = await hashPassword(password);
        return await User.create({name,email,password:hashedPassword})
    }
    static async deleteUser(id:string){
        await connectDB()
        return await User.findByIdAndDelete(id)
    }
    static async updateUser(id:string,name:string,email:string,password:string){
        await connectDB()
        return await User.findByIdAndUpdate(id,{name,email,password})
    }
    static async getUserById(id:string){
        await connectDB()
        return await User.findById(id)
    }
    static async getUserByEmail(email:string){
        await connectDB()
        return await User.findOne({email})
    }
    static async getAllUsers(){
        await connectDB()
        return await User.find()
    }
}