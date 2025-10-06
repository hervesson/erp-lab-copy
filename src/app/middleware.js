import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const TOKEN_KEY = 'token'

export async function middleware(request) {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')?.value

  const protectedPaths = ['/configuracoes', '/orders', '/users']
  const pathname = request.nextUrl.pathname

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// ✅ Novo formato
export const matcher = [
  '/configuracoes/:path*',
  '/orders/:path*',
  '/users/:path*',
]
