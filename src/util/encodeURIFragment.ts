export const encodeURIFragment = (input: string) =>
  // '%23' is URL-encoded '#'
  input.replace(/#/g, "%23")
