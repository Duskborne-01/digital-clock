function clock() {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let seconds = document.getElementById("seconds");
  let AmPm = document.getElementById("AmPm");
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";

  if (h >= 12) {
    am = "PM";

    if (h > 12) h = h - 12;
  } else if (h === 0) {
    h = 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.textContent = h;
  minute.textContent = m;
  seconds.textContent = s;
  AmPm.textContent = am;
}

clock();
setInterval(clock, 1000);