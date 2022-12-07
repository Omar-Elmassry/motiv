export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const BASE_HEADERS = (headers: any) => {
  headers.set("Accept", "application/json");

  return headers;
};