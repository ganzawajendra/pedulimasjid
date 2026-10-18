import { NextResponse } from "next/server";

const API = process.env.API_URL;

export async function POST(req: Request){
    const {email, password} = await req.json();

    const res = await fetch("${API}/api/v1/auth/login", {
        method: "POST",
        headers : {"Content-Type" : "application/x-www-form-urlencoded"},
        body: new URLSearchParams({username: email, password})
    })

    const data = await res.json()
    if(!res.ok) return NextResponse.json(data, {status: res.status})

    const response = NextResponse.json({ok: true})
    response.cookies.set("access_token", data.access_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60
    })
    return response
}