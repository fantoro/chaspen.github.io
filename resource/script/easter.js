var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
    
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {

    konamiCodePosition++; //get pos

    if (konamiCodePosition == konamiCode.length) {
        execEE();
        konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function execEE() {
<<<<<<< HEAD
    window.location = "https://www.youtube.com/watch?v=B810Rk20pRI";
=======

  window.location = "https://www.youtube.com/watch?v=TJP_lB9McJ0";
>>>>>>> 9a46e35f3b671aad427f5e6452c008e181b2458d
}