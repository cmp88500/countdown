function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;
  console.log(currentDate);
  console.log(countDate);
  console.log(diff);
}

countdown("Dec 25, 2018 00:00:00");
