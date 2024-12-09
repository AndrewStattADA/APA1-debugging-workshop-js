function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  } else if (hours == 12) {
    return `${hours}:${minutes} PM`;
  } else if (hours === "00") {
    return `${Number(hours)+12}:${minutes} AM`;
  } else {
    return `${Number(hours)}:${minutes} AM`;
  } 


  
}

module.exports = { convertTo12HourClock };
