function showMenu(){
    const menu = document.querySelector('.menu ')
    menu.style.display = 'flex'
}
function hideMenu(){
    const menu = document.querySelector('.menu ')
    menu.style.display = 'none'
}
var blocks = document.querySelectorAll(".square");
var rField = document.getElementById("r");
var gField = document.getElementById("g");
var bField = document.getElementById("b");
var result = document.querySelector("h2");
var aRed, aBlue, aGreen, red, green, blue;
var correctColor = Math.floor(Math.random() * 6); // Random block
var data = [];
var isCorrect = document.querySelector("h2");
var count = 1; // Attempt count
var f = 0;
var s = "";
var t = "";
var reset = document.querySelector("#reset");
var num = 0;

// Function to change background color of the blocks
function changeBackground(tile) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    tile.style.background = "rgba(" + red + "," + green + "," + blue + ")";

    // Store the colors for later comparison
    data.push({ redVal: red, greenVal: green, blueVal: blue });
}

// Set initial random colors for the blocks
for (var i = 0; i < 6; i++) {
    changeBackground(blocks[i]);

    // Add event listener to each block
    blocks[i].addEventListener("click", function () {
        num += 1;
        if (this.style.background === blocks[correctColor].style.background) {
            f = i;
            // Determine feedback based on the attempt count
            if (count == 1) {
                s = "You are a pro";
                t = "st try";
            } else if (count == 2) {
                s = "You are a color guru";
                t = "nd try";
            } else if (count == 3) {
                s = "Excellent";
                t = "rd try";
            } else if (count == 4) {
                s = "Good!!";
                t = "th try";
            } else if (count == 5) {
                s = "You were lucky";
                t = "th try";
            }
            isCorrect.textContent = s + " You guessed it in " + count + t;

            // Show reset button after correct guess
            reset.classList.remove("hide");

            // Set all blocks to the correct color
            for (var j = 0; j < blocks.length; j++) {
                blocks[j].style.background = blocks[correctColor].style.background;
            }

        } else {
            // Incorrect guess
            if (count == 5) {
                isCorrect.textContent = "You lost !!";
                reset.classList.remove("hide");
                // Reveal all colors on losing
                for (var k = 0; k < blocks.length; k++) {
                    blocks[k].style.background = blocks[correctColor].style.background;
                }
            } else {
                isCorrect.textContent = "You are wrong";
                this.style.background = "white";
                if (f != 1)
                    count++;
            }
        }
    });
}

// Set RGB values for the correct color's block
var s = data[correctColor].redVal + data[correctColor].blueVal + data[correctColor].greenVal;
a = data[correctColor].redVal / s * 100;
b = data[correctColor].blueVal / s * 100;
c = data[correctColor].greenVal / s * 100;

// Update the RGB values on the page
rField.textContent = Math.round(a);
bField.textContent = Math.round(b);
gField.textContent = Math.round(c);

// Reset functionality
reset.addEventListener("click", function () {
    window.location.reload();
});
