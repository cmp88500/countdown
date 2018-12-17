function addZero(x) {
  if (x < 10) {
    x = `0${x}`;
    return x;
  } else {
    return x;
  }
}

function countdown(x) {
  let currentDate = new Date().getTime();
  let countDate = new Date(x).getTime();
  let diff = countDate - currentDate;
  let milSecs = [86400000, 3600000, 60000, 1000];
  let times = []
  let days = addZero(Math.floor(diff / milSecs[0]));
  times.push(days);
  for (i=0; i<milSecs.length-1; i++) {
    let a = addZero(Math.floor(diff % milSecs[i]/milSecs[i+1]));
    times.push(a);
  }
  let timeClock = `${times[0]}: ${times[1]}: ${times[2]}: ${times[3]}`;
  return timeClock;
}

window.onload = function frontEnd() {
  setInterval(function() {
    function display(time, id, name) {
      let div = document.getElementById(id);
      let clock = countdown(time);
      div.children[0].innerHTML = `Countdown to ${name}`;
      div.children[1].innerHTML = clock;
    }
    display("Dec 25, 2018 00:00:00", 'countdown', 'Christmas');
  }, 1000);
}
