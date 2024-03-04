// //middleware.ts

// // import {  } from "@/Utils/Auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { useUserStore } from "./hooks/store/storeUser";


// const protectedRoutes = ["/dashboard"];
// const { user } = useUserStore();
// console.log({ user })
// export default function middleware(req: NextRequest) {
//     if (!user.uid && protectedRoutes.includes(req.nextUrl.pathname)) {
//         // const absoluteURL = new URL("/");
//         return NextResponse.redirect("/");
//     }
// }