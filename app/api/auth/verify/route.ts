import { verifyJWT } from "@/app/lib/middlewares/verifyJWT";

export async function GET(req: Request) {
    try {
        const user = await verifyJWT();
        if (!user || user.role !== "admin") {
            return new Response(JSON.stringify({ success: false, error: "Unauthorized access" }), { 
                status: 401,
                headers: { "Content-Type": "application/json" }
            });
        }
        return new Response(JSON.stringify({ success: true, user }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: "Invalid token" }), { 
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }
}