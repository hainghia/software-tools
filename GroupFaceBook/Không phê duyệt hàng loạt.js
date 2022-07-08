
// Dùng Script để cuộn trang
var scrollInt = 0;
function ScrollForever() {
  scrollInt = window.setInterval(function() {window.scrollTo(0,document.body.scrollHeight);}, 1000);
}
function StopScrolling() {
  window.clearInterval(scrollInt);
}
ScrollForever();

/** Khi dùng vòng lặp */
StopScrolling();