function getLocalTime(){
  let date = new Date();
  let indo = date.getHours() + 7
  let times = indo+":"+date.getMinutes();
  return times;
  
  }
  console.log(getLocalTime())