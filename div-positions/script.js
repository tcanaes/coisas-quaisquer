window.addEventListener('load', start);

function start() {
  displayCurrentDate(document.getElementById('date'));
}

function displayCurrentDate(el) {
  var dt = new Date();
  console.log(el, dt.toLocaleDateString());
  el.innerHTML = dt.toLocaleDateString();
}
