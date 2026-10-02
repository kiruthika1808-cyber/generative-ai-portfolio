// ===============================
// TYPING ANIMATION
// ===============================

const words = [
    "Generative AI Enthusiast",
    "AI Explorer",
    "Prompt Engineering Learner",
    "BSc IT Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement =
    document.getElementById("typing");


function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();



// ===============================
// MOBILE MENU
// ===============================

const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener(
    "click",
    () => {

        if (
            navLinks.style.display ===
            "flex"
        ) {

            navLinks.style.display =
                "none";

        } else {

            navLinks.style.display =
                "flex";

            navLinks.style.flexDirection =
                "column";

            navLinks.style.position =
                "absolute";

            navLinks.style.top =
                "70px";

            navLinks.style.right =
                "20px";

            navLinks.style.background =
                "#11111f";

            navLinks.style.padding =
                "20px";

            navLinks.style.borderRadius =
                "10px";
        }
    }
);



// ===============================
// NAVIGATION CLOSE
// ===============================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <= 900
                ) {

                    navLinks.style.display =
                        "none";
                }

            }
        );

    });