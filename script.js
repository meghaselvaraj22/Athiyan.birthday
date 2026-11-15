function showSurprise() {

    // Hide welcome screen
    document.querySelector(".welcome").style.display = "none";

    // Show birthday surprise
    document.getElementById("surprise").style.display = "block";

    // Create floating hearts
    for (let i = 0; i < 30; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = "25px";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}