const circuit = document.getElementById("circuit");
const tictactoe = document.getElementById("tic-tac-toe");
const words = document.getElementById("words");
const voidcolor = document.getElementById("void-color");
const dots = document.getElementById("dots");
const halfway = document.getElementById("halfway");

circuit.addEventListener("click", function() {
    circuit.style = "border-bottom: 4px solid #ffffff;"
    tictactoe.style = ""
    words.style = ""
    voidcolor.style = ""
    dots.style = ""
    halfway.style = ""

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Circuit Cube</h1>
        <p>
            This puzzle has 3 solutions. It has a yellow, blue, and red circuit. Each circuit starts and stops at opposite
            sides of the cube. Only one circuit can be solved at a time.
        </p>
        <img id="cube" src="art/circuit 1.png" alt="circuit">
    </div>
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

tictactoe.addEventListener("click", function() {    
    circuit.style = ""
    tictactoe.style = "border-bottom: 4px solid #ffffff;"
    words.style = ""
    voidcolor.style = ""
    dots.style = ""
    halfway.style = ""

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Tic-Tac-Toe Cube</h1>
        <p>
            This puzzle has 2 or more solutions. The 1st solution consists of having either
            X or O winning on each side. The 2nd solution consists of setting all the X's
            on one corner of the cube and all the O's on the opposite corner of the cube.
            There may be more solutions such as having only X or only O winning on every side
            as well as having neither X nor O winning on every side.
        </p>
        <img id="cube" src="art/tic-tac-toe 1.png" alt="tic-tac-toe">
        <img id="cube" src="art/tic-tac-toe 3.png" alt="tic-tac-toe">
        <img id="cube" src="art/tic-tac-toe 4.png" alt="tic-tac-toe">
    </div> 
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

words.addEventListener("click", function() {
    circuit.style = ""
    tictactoe.style = ""
    words.style = "border-bottom: 4px solid #ffffff;"
    voidcolor.style = ""
    dots.style = ""
    halfway.style = ""

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Words Cube</h1>
        <p>
            This puzzle has 3 solutions. The 1st solution is solving it based on
            the background color. The 2nd solution is solving it based on the word.
            The 3rd solution is solving it based on the color of the word.
        </p>
        <img id="cube" src="art/words 1.png" alt="words">
        <img id="cube" src="art/words 2.png" alt="words">
        <img id="cube" src="art/words 3.png" alt="words">
    </div>  
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

voidcolor.addEventListener("click", function() {
    circuit.style = ""
    tictactoe.style = ""
    words.style = ""
    voidcolor.style = "border-bottom: 4px solid #ffffff;"
    dots.style = ""
    halfway.style = ""

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Void-Color Cube</h1>
        <p>
            This puzzle has 2 solutions. The 1st solution is solving it based on
            the inner color. The 2nd solution is solving it based on the outer color.
        </p>
        <img id="cube" src="art/void-color 1.png" alt="void-color">
        <img id="cube" src="art/void-color 2.png" alt="void-color">
    </div>  
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

dots.addEventListener("click", function() {
    circuit.style = ""
    tictactoe.style = ""
    words.style = ""
    voidcolor.style = ""
    dots.style = "border-bottom: 4px solid #ffffff;"
    halfway.style = ""

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Dots Cube</h1>
        <p>
            This puzzle has 1 solution, but there are many ways to achieve it. On each
            of the center squares, there are 2 numbers representing how many black and white
            circles should be showing on that face. It is solved when all sides satisfy this.
        </p>
        <img id="cube" src="art/dots 1.png" alt="dots">
        <img id="cube" src="art/dots 2.png" alt="dots">
    </div> 
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

halfway.addEventListener("click", function() {
    circuit.style = ""
    tictactoe.style = ""
    words.style = ""
    voidcolor.style = ""
    dots.style = ""
    halfway.style = "border-bottom: 4px solid #ffffff;"

    const newHTML = 
    `
    <div id="rubiks">
        <h1>Halfway Cube</h1>
        <p>
            This puzzle has 2 solutions. The 1st solution is solving it like a normal
            Rubik's cube with some missing colors. The 2nd solution is placing all of the 
            colored sqaures in one corner and all of the blank squares in the opposite corner.
        </p>
        <img id="cube" src="art/halfway 1.png" alt="halfway">
        <img id="cube" src="art/halfway 2.png" alt="halfway">
        <img id="cube" src="art/halfway 3.png" alt="halfway">
    </div>  
    `
    document.getElementById("main-content").innerHTML = newHTML;
});
