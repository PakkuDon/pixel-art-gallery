export const extractFilename = (path: string) => {
  const filename = path.split("/").slice(-1)[0]
  return filename.split(".")[0]
}
