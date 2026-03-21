import { NextResponse } from "next/server";
import { comparePasswords } from "../../security/password";
import { ApiResponse } from "../../utils/ApiResponse";
import { JWTHelper } from "../../utils/JWTHelper";
import { UserService } from "./user.service";

export class UserController {

    static async register(req:Request){
        const {name,email,password} = await req.json()
        if(!name || !email || !password){
            return ApiResponse(400, "", "All fields are required");
        }
        const existingUser = await UserService.getUserByEmail(email)
        if(existingUser){
            return ApiResponse(400, "", "User already exists");
        }
        const user = await UserService.registerUser(name,email,password)
        return ApiResponse(200, user, "User registered successfully");
    }
    static async login(req:Request){
        const {email,password} = await req.json()
        if(!email || !password){
            return ApiResponse(400, "", "All fields are required");
        }
        const user = await UserService.getUserByEmail(email)
        if(!user){
            return ApiResponse(404, "", "User not found");
        }
        const isPasswordValid = await comparePasswords(password,user.password)
        if(!isPasswordValid){
            return ApiResponse(401, "", "Invalid password");
        }
        const token = JWTHelper.generateToken({id:user._id,role:"admin"})
        const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 },
    );

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;
    }
    static async delete(req:Request){
        const {id} = await req.json()
        const user = await UserService.deleteUser(id)
        return ApiResponse(200, user, "User deleted successfully");
    }
    static async update(req:Request){
        const {id,name,email,password} = await req.json()
        const user = await UserService.updateUser(id,name,email,password)
        return ApiResponse(200, user, "User updated successfully");
    }
    static async getById(req:Request){
        const {id} = await req.json()
        const user = await UserService.getUserById(id)
        return ApiResponse(200, user, "User fetched successfully");
    }
    static async getByEmail(req:Request){
        const {email} = await req.json()
        const user = await UserService.getUserByEmail(email)
        return ApiResponse(200, user, "User fetched successfully");
    }
    static async getAll(req:Request){
        const users = await UserService.getAllUsers()
        return ApiResponse(200, users, "Users fetched successfully");
    }
}