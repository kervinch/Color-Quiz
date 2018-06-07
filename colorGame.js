var amount = 6;
var colors = generateRandomColors(amount);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var p = document.getElementById("message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    amount = 3;
    colors = generateRandomColors(amount);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    amount = 6;
    colors = generateRandomColors(amount);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function() {
    colors = generateRandomColors(amount);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "rgb(35, 35, 35)";
    p.textContent = "";
})
colorDisplay.textContent = pickedColor;

console.log(squares);

for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor) {
            //alert("Correct");
            h1.style.background = pickedColor;
            p.textContent = "Correct!";
            for(var i = 0; i < squares.length; i++) {
                squares[i].style.background = pickedColor;
            }
        } else {
            this.style.background = "rgb(35, 35, 35)";
            p.textContent = "Wrong! Please try again!";
            //alert("False");
        }
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var colorArray = [];
    for(var i = 0; i < num; i++) {
        colorArray.push(randomColor());
    }

    return colorArray;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}