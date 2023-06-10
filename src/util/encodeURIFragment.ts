export const encodeURIFragment = (input: string) =>
  // '%2523' is URL-encoded '#'
  input.replace(/#/g, "%2523")
