const constellation = document.getElementById("constellation");
const pathfinder = document.getElementById("pathfinder");

constellation.addEventListener("click", function() {
    constellation.style = "border-bottom: 4px solid #ffffff;"
    pathfinder.style = ""

    const newHTML = 
    `
    <br>
    <div id="framecontainer">
        <iframe src="https://www.youtube.com/embed/Fj_7lkHpOY0"></iframe>
    </div>
    <div id="middle">                
        <h2>Overview</h2>
        <p>
            Constellation is a shoot-em-up roguelike arcade game for mobile. This was my first published game
            and it is currently only available on android. I plan to make it available for iphones and PCs in the future.
            It was developed using the Unity engine and took me approximately 3 months to complete. 
            <br><br>
            Check it out on Google Play.                   
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.JasonLandis.Constellation">
            <img style="border: 1px solid rgb(15, 15, 15);" width="100px" height="100px" src="art/constellationlogo.png" alt="Google Play">
        </a>
    </div>
    <div id="middle">
        <h2>How to play</h2>
        <p>
            You play as a star within a universe surrounded by other stars. 
            You have a mini-map that allows you to see where you are in the universe and any stars that are close by. 
            You select a direction and a distance to begin traveling and grow your constellation.
        </p>
        <img width="300px" src="art/Gameplay 4.png" alt="something went horribly wrong">
        <img width="300px" src="art/Gameplay 5.png" alt="something went horribly wrong">
    </div> 
    <div id="middle">
        <h1>Asteroids</h1>
        <p>
            While traveling, you must avoid oncoming asteroids. 
            Asteroids have three attributes: size, spread, and speed. 
            Also, each universe has 5 zones; you start in zone 1, and each time you enter a higher zone, 
            the size, spread, and speed of the asteroids change to increase the difficulty of the game.
        </p>
        <img width="300px" src="art/Gameplay 1.png" alt="something went horribly wrong">
        <img width="300px" src="art/Gameplay 2.png" alt="something went horribly wrong">
    </div>
    <div id="middle">
        <h2>Roguelike</h2>
        <p>
            If you land on another star in the universe, you are randomly given a choice to potentially alter 
            the size, spread, or speed of the asteroids to make the game easier. You may also be given the choice 
            to claim some extra lives. If you manage to clear Zone 5, you exit the universe, your scores are saved, 
            and you can travel to another universe.
        </p>
        <img width="300px" src="art/Gameplay 3.png" alt="something went horribly wrong">
    </div>
    <div id="middle">
        <h2>Unlockables</h2>
        <p>
            There are many different stars to unlock, each bringing a unique glow to your game. 
            There are also many upgrades to unlock, allowing you to choose the starting value of the 
            size, spread, and speed of the asteroids, as well as how many extra lives you start with.
        </p>
        <img width="300px" src="art/Menu Image.png" alt="something went horribly wrong">
        <img width="300px" src="art/Upgrades Menu.png" alt="something went horribly wrong">
        <img width="300px" src="art/Shop Image.png" alt="something went horribly wrong">
    </div>
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

pathfinder.addEventListener("click", function() {
    constellation.style = ""
    pathfinder.style = "border-bottom: 4px solid #ffffff;"

    const newHTML = 
    `
    <br>
    <div id="framecontainer">
        <video controls autoplay>
            <source src="videos/Pathfinder.mp4" type="video/mp4">
        </video>
    </div>
    <div id="middle">
        <h2>Overview</h2>
        <p>
            Pathfinder was one of my first projects. It is currently a prototype but I plan to work
            on it more in the future.
        </p>
    </div>
    <div id="middle">
        <h2>How to play</h2>
        <p>
            You are given a map with a number of tiles including a start tile and an end tile. On the start tile, there is a character that
            searches for the most optimal path to the end tile. Once you hit the play button on the top left of the screen, the character begins
            to move towards the end tile. The goal of the game is to prevent the character from reaching the end tile within
            a certain amount of time. You can stall the character by placing blockades causing it to reroute its path.
        </p>
    </div>
    <div id="middle">
        <h2>TODO</h2>
        <p>
            - Add unique levels
            <br><br>
            - Update graphics
            <br><br>
            - Prevent blockade placements that make it impossible for the character to reach the end tile.
            <br><br>
            - When hovering over a tile with a blockade, show a preview of the new path the character would take if the blockade is placed.
        </p>        
    </div>
    <div id="middle">
        <h2>Ideas</h2>
        <p>
            - Different size blockades
            <br><br>
            - Blockades that are removed after a certain amount of time
            <br><br>
            - Handling multiple characters at once
            <br><br>
            - Having more than one end tile on the map
        </p>        
    </div> 
    `
    document.getElementById("main-content").innerHTML = newHTML;
});

window.onload = function() {
    document.getElementById("line-container").style = "opacity: 1";
};
