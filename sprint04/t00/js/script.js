let count = true;

function transformation() {
    let transform = document.getElementById("hero");
    const background = document.getElementById("lab");

    if (!count) {
        transform.textContent = "Hulk";
        transform.style.letterSpacing = "6px";
        transform.style.fontSize = "130px";
        background.style.background = "#70964b"
        count = true;
    } else {
        transform = document.getElementById("hero");
        transform.style.fontSize = "60px";
        transform.style.letterSpacing = "2px";
        transform.textContent = "Bruce Banner";
        background.style.background = "#ffb300"
        count = false;
    }
}

transformation();