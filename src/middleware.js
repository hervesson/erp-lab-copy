// middleware.js
import { NextResponse } from 'next/server'

export const TOKEN_KEY = 'token'

export function middleware(request) {
  // 👇 Em middleware, cookies vêm do request
  const token = request.cookies.get(TOKEN_KEY)?.value

  const protectedRoutes = ['/configuracoes', '/atendimento']

  const { pathname } = request.nextUrl

  // Se o pathname começa com algum prefixo protegido
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  )

  if (isProtected && !token) {
    const loginUrl = new URL('/login', request.url)
    // opcional: guarda de onde o cara veio
    // loginUrl.searchParams.set('from', pathname)

    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
