
const barProgress = {

}
/** 
 * Progress bar 
*/

function updateProgress(step, totalSteps) {
    var progressBar = document.getElementById("bar");
    var progressPercentage = (step / totalSteps) * 100;
    progressBar.style.width = progressPercentage + "%";
}

function updateProgressBar(hash){
    var nodes = document.getElementsByTagName("section");
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes.item(i);

    }
}

/**
 * Update the current display based on the hash.
 */
function updateHash() {
    var hash = location.hash;

    if (hash) {
        hash = hash.substr(1);
    } else {
        hash = "_start";
    }
    showSection(hash);
    updateProgressBar(hash);
}

/**
 * Hide all sections except the one with the hash (id) provided
 */
function showSection(hash) {
    var nodes = document.getElementsByTagName("section");
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes.item(i);
        if (node.id == hash) {
            node.style.display = "block";
            console.log("tous les nodes : ", node," et leurs index", i);
        } else {
            node.style.display = "none";
        }
    }
}


window.onload = () => {

    // do we support hashchange events?
    // if so, hide all but the active section
    if ("onhashchange" in window) {
        updateHash();
        window.addEventListener('hashchange', updateHash);
    }
};