function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;

  let milSecs = [86400000, 3600000, 60000, 1000];
  let times = []
  let days = Math.floor(diff / milSecs[0]);
  let hours = Math.floor(diff % milSecs[0]/milSecs[1]);
  let minutes = Math.floor(diff % milSecs[1]/milSecs[2]);
  let seconds = Math.floor(diff % milSecs[2]/milSecs[3]);
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
}

countdown("Dec 25, 2018 00:00:00");
