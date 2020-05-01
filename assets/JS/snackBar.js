function snackBar(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
    document.getElementById("snackbar").innerHTML = message;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}