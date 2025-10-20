export function formatLink(url: string) {
  if (url === "/" || url === "") {
    return "/";
  }
  if (process.env.NEXT_PUBLIC_ENV === "PRODUCTION") {
    return `${process.env.NEXT_PUBLIC_ASSETS_PATH}${url}`;
  }

   if (process.env.NEXT_PUBLIC_ENV === "AWS") {
    return `${process.env.NEXT_PUBLIC_ASSETS_PATH}${url}.html`;
  }

  return `${url}`;
}





export function formatBacklink(url: string) {
  if (url === "/" || url === "") {
    return "https://sinhphuctho.com";
  }

  return `https://sinhphuctho.com${url}.html`;
}