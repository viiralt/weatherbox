export const convertUnix = timestamp => {
  const datetime = new Date(timestamp * 1000);
  const hours = datetime.getHours();
  const minutes = `0${datetime.getMinutes()}`;
  const seconds = `0${datetime.getSeconds()}`;
  return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
};
