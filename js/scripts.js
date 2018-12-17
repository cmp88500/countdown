function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;

  let milSecs = [86400000, 3600000, 60000, 1000];
  let times = []
  let days = Math.floor(diff / milSecs[0]);
  console.log(days);
  for (i=0; i<milSecs.length-1; i++) {
    let a = Math.floor(diff % milSecs[i]/milSecs[i+1]);
    console.log(a);
  }
}

countdown("Dec 25, 2018 00:00:00");
