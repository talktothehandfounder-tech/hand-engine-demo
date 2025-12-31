/* ================================
   THE HAND ENGINE — INTERACTIONS
   ================================ */

const hand = document.getElementById("hand");

/* -------------------------------
   TAP POP
--------------------------------*/
hand.addEventListener("click", () => {
    hand.style.animation = "tapPop 0.25s ease";
    setTimeout(() => {
        hand.style.animation = "float 4s ease-in-out infinite";
    }, 250);
});

/* -------------------------------
   DOUBLE-TAP WINK
--------------------------------*/
let lastTap = 0;

hand.addEventListener("click", () => {
    const now = Date.now();

    if (now - lastTap < 300) {
        hand.style.animation = "wink 0.35s ease";
        setTimeout(() => {
            hand.style.animation = "float 4s ease-in-out infinite";
        }, 350);
    }

    lastTap = now;
});

/* -------------------------------
   PRESS-AND-HOLD (Talk Mode)
--------------------------------*/
let pressTimer;

hand.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        console.log("Talk Mode Activated (silent)");
    }, 550);
});

hand.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});

hand.addEventListener("mouseleave", () => {
    clearTimeout(pressTimer);
    hand.style.animation = "float 4s ease-in-out infinite";
});
