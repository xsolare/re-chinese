declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_SITE_URL?: string
      JWT_HEADER?: string
      API_URL?: string
    }
  }
}

export {}
