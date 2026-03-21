import { UserController } from "@/app/lib/featuers/user/user.controller";

export async function POST(req:Request){
    return UserController.login(req)
}
