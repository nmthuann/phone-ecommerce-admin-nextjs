// import { NextRequest, NextResponse } from 'next/server'
// // import { decrypt } from '@/app/lib/session'
// import { cookies } from 'next/headers'

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Bỏ qua các route GET
  if (req.method === 'GET') {
    return
  }

  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
}

// 1. Specify protected and public routes
// const protectedRoutes = [
//   '/',
//   '/products',
//   '/skus',
//   '/categories',
//   '/brands',
//   '/suppliers',
//   '/users',
//   '/employees',
//   '/orders',
//   '/purchaseOrders',
//   '/warehouseReceipts'
// ]
// const publicRoutes = ['/login']

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)

//   // 3. Decrypt the session from the cookie
//   const cookie = (await cookies()).get('access_token')?.value

//   // 5. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !cookie) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }

//   // 6. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     cookie // &&
//     // !req.nextUrl.pathname.startsWith('/')
//   ) {
//     return NextResponse.redirect(new URL('/', req.nextUrl))
//   }

//   return NextResponse.next()
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
// }
