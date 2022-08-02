window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.height = "35px";
    document.getElementById("navbar").classList.add("navbar-scrolldown");
  } else {
    document.getElementById("navbar").style.padding = "20px 20px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("navbar").classList.remove("navbar-scrolldown");
  }
};


var i = 0;
var j = 0;
var txt = 'Kami menyediakan beberapa inspirasi design untuk anda. Silahkan memilih dan gunakan sesuai kebutuhan'; /* The text */
var txt2 = 'design';
var speed = 50; /* The speed/duration of the effect in milliseconds */
window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById('p-typewriter').innerHTML += txt.charAt(i);
    if (i == 53) {
      document.getElementById('p-typewriter').innerHTML += '<br>';
    }
    i++;
    setTimeout(typeWriter, speed);
  }
};
