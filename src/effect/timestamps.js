export default function formatTime (UTCtime) {
  const dateRegex = /^.*(?=T)/
  const timeRegex = /(?<=T).*(?=\.)/
  const date = dateRegex.exec(UTCtime)
  const time = timeRegex.exec(UTCtime)
  return date + ' ' + time
}
