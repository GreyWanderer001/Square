var counter = 0;

function changeColor() {
    
    counter++;
    document.getElementById("clickCount").innerHTML = counter;

    var square = document.getElementById("mySquare");

    var maxX = window.innerWidth - square.clientWidth;
    var maxY = window.innerHeight - square.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    square.style.left = randomX + 'px';
    square.style.top = randomY + 'px';

    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    square.style.backgroundColor = randomColor;
  }