import axios from 'axios';

// interface ApiReturnType {}

export const api = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8888/api/'
    // headers: {
    //   [env.JWT_HEADER]: useCookie(env.JWT_HEADER)?.value || ''
    // }
    // withCredentials: true,
  });
  //   const apis = {
  //     user: UserApi,
  //     word: WordApi,
  //     hieroglyph: HieroglyphApi,
  //     pinyin: PinyinApi
  //   };

  //   const result = Object.entries(apis).reduce((prev, [key, f]) => {
  //     return {
  //       ...prev,
  //       [key]: f(instance)
  //     };
  //   }, {} as ApiReturnType);

  return instance;
};
