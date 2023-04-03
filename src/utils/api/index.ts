import axios from 'axios'
import { getCookie } from 'cookies-next'

import { GlossaryApi } from './glossary'

export type ApiReturnType = {
  glossary: ReturnType<typeof GlossaryApi>
}

const { JWT_HEADER, API_URL } = process.env

export const api = (): ApiReturnType => {
  const instance = axios.create({
    baseURL: `${API_URL ?? ''}/api`,
    headers: {
      [JWT_HEADER ?? 'JWT']: getCookie(JWT_HEADER ?? 'JWT')
    },
    withCredentials: true
  })
  const apis = {
    glossary: GlossaryApi
  }

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance)
    }
  }, {} as ApiReturnType)

  return result
}
