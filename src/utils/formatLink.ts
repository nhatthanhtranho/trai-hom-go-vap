export function formatLink(url: string) {
  if (url === "/" || url === "") {
    return "/";
  }
  return `${url}.html`;
}

export function formatBacklink(url: string) {
  if (url === "/" || url === "") {
    return "https://sinhphuctho.com";
  }

  return `https://sinhphuctho.com${url}.html`;
}
