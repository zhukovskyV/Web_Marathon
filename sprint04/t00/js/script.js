let count = 1;

function transformation() {
    const transform = document.getElementById("hero");
    const background = document.getElementById("lab");

    if (count === 2) {
        transform.textContent = "Hulk";
        transform.style.letterSpacing = "6px";
        transform.style.fontSize = "130px";
        background.style.background = "#70964b"

        count = 1;
    } else {
        const transform = document.getElementById("hero");
        transform.style.fontSize = "60px";
        transform.style.letterSpacing = "2px";
        transform.textContent = "Bruce Banner";
        background.style.background = "#ffb300"
        count = 2;
    }
}

transformation();