function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;

  let seconds = 1000;
  let minutes = 1000 * 60;
  let hours  = 1000 * 60 * 60;
  let days = 1000 * 60 * 60 * 24;
  console.log(seconds);
  console.log(minutes);
  console.log(hours);
  console.log(days);

  let times = [1000, 60000, 3600000, 86400000];
  console.log(times);
}

countdown("Dec 25, 2018 00:00:00");
