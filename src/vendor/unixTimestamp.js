
export default function unixToDate(unix_timestamp) {
  let myDate = new Date(unix_timestamp * 1000);
  return `${myDate.toUTCString()}`;
}
