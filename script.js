
// Get HTML elements
const button = document.getElementById("startButton");

const heading = document.querySelector("h1");

const paragraph = document.querySelector("p");

const scene = document.getElementById("scene");

const girl = document.getElementById("girl");

const boy = document.getElementById("boy");

const floatingHearts = document.getElementById("floating-hearts");

const loveMessage = document.getElementById("loveMessage");


// When the button is clicked
button.addEventListener("click", function() {

    // Prevent clicking multiple times
    button.disabled = true;

    // Hide the button
    button.style.display = "none";

    // Change welcome text
    heading.textContent = "Our Love Story Begins! ❤️";

    paragraph.textContent = "Two hearts finding each other... 🥹";

    // Start couple walking animation
    scene.classList.add("started");


    // Hide individual girl and boy images after 2 seconds
    setTimeout(function() {
        girl.style.opacity = "0";
        boy.style.opacity = "0";
    }, 2000);


    // Create floating hearts
    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("span");

        heart.textContent = "💕";

        heart.classList.add("floating-heart");

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDelay = Math.random() * 4 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        floatingHearts.appendChild(heart);

        // Remove hearts after animation
        setTimeout(function() {
            heart.remove();
        }, 8500);

    }


    // Display final love message
    setTimeout(function() {

        loveMessage.classList.add("show");

    }, 4800);

});
