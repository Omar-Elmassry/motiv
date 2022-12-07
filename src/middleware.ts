import { BASE_URL } from "config/dataService";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const reqUrl = request.nextUrl.pathname;

  const fetchUser = await fetch(`${BASE_URL}/auth/validate`, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "Next.js",
    },
  })
    .then((res) => res.json())
    .catch((err) =>
      console.log("🚀 ~ file: middleware.tsx ~ line 38 ~ middleware ~ err", err)
    );

  // console.log(
  //   "🚀 ~ file: middleware.ts ~ line 18 ~ middleware ~ fetchUser",
  //   fetchUser
  // );

  const validUser = fetchUser?.statusCode >= 400 ? false : true;
  //TODO:if user is valid but profile not complete

  //TODO:if user is valid but otp not verified

  const loginUrls = ["/login", "/sign-up", "/recover-password"];

  // const isUrlValid = urls.includes(reqUrl);

  // const verifyMobileUrls = ["/sign-up/confirm-phone", "/sign-up/enter-phone"];

  // const completeProfileUrls = ["/complete-profile"];

  if (!validUser && !loginUrls.includes(reqUrl)) {
    return NextResponse.redirect(
      `${new URL("/login", request.url)}?redirect=${reqUrl}`
    );
  }

  // if (
  //   validUser &&
  //   !verifyMobileUrls.includes(reqUrl) &&
  //   !fetchUser?.phoneNumber
  // )
  //   return NextResponse.redirect(new URL("/sign-up/enter-phone", request.url));

  // if (
  //   validUser &&
  //   !verifyMobileUrls.includes(reqUrl) &&
  //   !fetchUser?.isOtpVerified
  // ) {
  //   console.log("redirected to confirm phone", reqUrl);
  //   return NextResponse.redirect(
  //     new URL("/sign-up/confirm-phone", request.url)
  //   );
  // }

  // if (
  //   validUser &&
  //   !completeProfileUrls.includes(reqUrl) &&
  //   !fetchUser?.isProfileComplete
  // ) {
  //   console.log("redirected to complete profile", reqUrl);
  //   return NextResponse.redirect(new URL("/complete-profile", request.url));
  // }

  if (
    validUser &&
    fetchUser?.isProfileComplete &&
    reqUrl.startsWith("/complete-profile")
  )
    return NextResponse.redirect(new URL("/", request.url));

  if (reqUrl.startsWith("/login") && validUser)
    return NextResponse.redirect(new URL("/", request.url));

  if (reqUrl.startsWith("/sign-up") && validUser)
    return NextResponse.redirect(new URL("/", request.url));

  if (reqUrl.startsWith("/recover-password") && validUser)
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/sign-up",
    "/complete-profile",
    "/recover-password",

    "/messages",

    "/community",
    "/community/(.*)",

    "/profile",
    "/profile/(.*)",

    "/tournaments/apply",
    "/tournaments/apply/(.*)",
  ],
};
