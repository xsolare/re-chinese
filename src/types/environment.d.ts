declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_HEADER?: string;
      API_URL?: string;
    }
  }
}

export {};
