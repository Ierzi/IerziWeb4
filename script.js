// Création des fontions

// Action du bouton Projects. Voir menuindex.html
function projects_clicked() {
    console.log("Projects Button Clicked");
}

// Action du bouton Source Code. Voir menuindex.html
function sourcecode_clicked() {
    console.log("Source Code Button Clicked");
    console.log("Opening a new tab on the window...");
    window.open("https://github.com/Ierzi/IerziWeb4", "_blank");
    console.log("Done.");

}

function news_clicked() {
    console.log("News Button CLicked");
    console.log("Openinga new tab on the window...");
    window.location.href = "newsindex.html";
    console.log("Done.");
}
