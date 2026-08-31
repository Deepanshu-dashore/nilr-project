"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API_ENDPOINTS } from "@/src/config/api.config";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/admin"); 
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center bg-contain bg-center overflow-hidden"
      style={{ backgroundImage: "url('/adminloginBg.png')" }}
    >
      {/* Dark Overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div> */}

      <div className="w-full max-w-sm px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/50">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-heading font-black text-primary tracking-tight mb-1">
              Admin Login
            </h1>
            <p className="text-text-muted font-medium text-xs">
              NIRM-CVRUK Campus Panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-primary/70 px-1 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/50 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
                placeholder="admin@nirm-cvruk.ac.in"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-primary/70 px-1 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/50 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm outline-none"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-[11px] text-accent font-bold text-center bg-accent/10 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full cursor-pointer py-3 rounded-xl font-bold text-xs tracking-widest uppercase transition-all shadow-md ${
                loading
                  ? "bg-[#00684a]/50 text-white/50 cursor-not-allowed"
                  : "bg-[#00684a] text-white hover:bg-[#00684a] hover:shadow-lg active:scale-[0.98]"
              }`}
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
          </form>

          {/* <div className="mt-8 text-center">
            <p className="text-[10px] font-medium text-text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/admin-register" className="text-primary font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div> */}
        </div>
        
        <p className="mt-6 text-center text-white/60 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
          <Link href="/">&copy; {new Date().getFullYear()} CVRU NIRM</Link>
        </p>
      </div>
    </div>
  );
}
