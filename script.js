const container = document.querySelector('#big__container');
const squares = document.querySelectorAll('.squares');
var h1 = document.querySelector('h1');
console.log(h1);
var result = 0;

var randomPosition = squares[Math.floor(Math.random() * 9)]
var hitPosition



function randomSquare() {

    squares.forEach(square => {
        square.classList.remove('red');
    })

    var randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("red");

    console.log(randomPosition);
    hitPosition = randomPosition

    console.log(result);
}


squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.className == hitPosition && square.id == hitPosition);
            result++;
            h1.innerHTML = result;
        })
    })
    // setInterval(randomPosition.style.backgroundColor = "black", 1000);


setInterval(randomSquare, 1000);