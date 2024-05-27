import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that require authentication
const protectedRoutes = createRouteMatcher([
  "/quiz",
  "/counselling",
  "/ethpayment",
]);

export default clerkMiddleware((auth, req) => {
  // Check if the requested URL is a protected route and the user is not signed in
  if (protectedRoutes(req) && !auth().userId) {
    // Create a clone of the current URL for modification
    let url = req.nextUrl.clone();
    url.pathname = "/sign-in"; // Change the pathname to the sign-in page

    // Redirect to the sign-in page using an absolute URL derived from the current request
    return NextResponse.redirect(url);
  }
  // Allow the request to proceed without redirection if it's to an unprotected route or if the user is signed in
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
