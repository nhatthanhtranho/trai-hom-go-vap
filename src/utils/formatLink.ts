export function formatLink(url: string) {
  if (process.env.NEXT_PUBLIC_ENV === "PRODUCTION") {
    return `${process.env.NEXT_PUBLIC_ASSETS_PATH}${url}`;
  }
  if (url === "/" || url === "") {
    return "/";
  }

  return `${url}`;
}


export function formatBacklink(url: string) {
  if (process.env.NEXT_PUBLIC_ENV === "PRODUCTION") {
    return `https://sinhphuctho.com${url}.html`;
  }
  if (url === "/" || url === "") {
    return "https://sinhphuctho.com/";
  }

  return `${url}`;
}