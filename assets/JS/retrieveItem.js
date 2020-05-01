function retrieveItem() {
    valueViewer("invoiceItems", "", "", "")
    if (!isNaN(parseInt(decrypt(localStorage.getItem("invoiceCounter"))))) {
        for (i = 1; i <= parseInt(decrypt(localStorage.getItem("invoiceCounter"))); i++) {
            if (!(localStorage.getItem(i) == null)) {
                valueAdder("invoiceItems", "<tr>", decrypt(localStorage.getItem(i)), "</tr>")
            }

        }
    }
}