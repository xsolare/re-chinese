const getUrlParam = (paramName: string): string | null =>
  new URLSearchParams(window.location.search).get(paramName);

export default getUrlParam;
