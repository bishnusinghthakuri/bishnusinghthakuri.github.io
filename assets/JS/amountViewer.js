function amountViewer() {
    var invoiceCounter = parseInt(decrypt(localStorage.getItem("invoiceCounter")));
    if (isNaN(invoiceCounter)) {
        valueViewer("subTotal", "", 0, "");
        valueViewer("vat", "", 0, "");
        valueViewer("total", "", 0, "");
    } else {
        var subTotalAmount = subTotal();
        var serviceCharge = percentageAdder(subTotalAmount, 10).toFixed(2);
        var vat = percentageAdder(subTotalAmount, 13).toFixed(2);
        var total = (parseFloat(subTotalAmount) + parseFloat(vat));
        total = total.toFixed(2);
        valueViewer("subTotal", "", subTotalAmount, "");
        valueViewer("vat", "", vat, "");
        valueViewer("total", "", total, "");

        valueViewer("amountInWords", "", toWord(parseInt(Math.round(total))), "");
    }
}   