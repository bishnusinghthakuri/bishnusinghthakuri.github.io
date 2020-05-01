function receiveValues(idName) {
    if (document.getElementById(idName).textContent == "") {
        return parseInt(document.getElementById(idName).value);
    }
    return parseInt(document.getElementById(idName).textContent);
}