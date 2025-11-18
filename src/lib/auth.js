import jwt from 'jsonwebtoken'
import * as cookie from 'cookie'

const SECRET = process.env.JWT_SECRET

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' })
}

export function getUserFromRequest(req) {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies.token
  if (!token) return null

  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}
