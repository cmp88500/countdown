function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;

  let milSecs = [86400000, 3600000, 60000, 1000];
  let times = []
  let days = Math.floor(diff / milSecs[0]);
  console.log(days);
}

countdown("Dec 25, 2018 00:00:00");
