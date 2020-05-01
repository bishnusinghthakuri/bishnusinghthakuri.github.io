function printSpecificArea(elementId) {
    var printContent = document.getElementById(elementId).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;

}