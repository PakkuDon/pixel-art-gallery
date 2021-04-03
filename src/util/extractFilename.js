export default (path) => {
  const filename = path.split("/").slice(-1)[0]
  return filename.split(".")[0]
}
