function subTotal() {
    var invoiceCounter = parseInt(decrypt(localStorage.getItem("invoiceCounter")));
    if (isNaN(invoiceCounter)) {
        return 0;
    } else {
        var subTotalValue = 0;
        for (i = 1; i <= invoiceCounter; i++) {
            subTotalValue += receiveValues(i);

        }

        return subTotalValue;
    }
}