import { getUserFromRequest } from '@/lib/auth'

export default function handler(req, res) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(401).json({ user: null })
  res.status(200).json({ user })
}
