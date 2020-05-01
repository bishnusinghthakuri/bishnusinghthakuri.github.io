function clearInvoiceItems() {
    for (i = 0; i <= localStorage.getItem("invoiceCounter"); i++) {
        localStorage.removeItem(i)
    }
    localStorage.removeItem("invoiceCounter");

    window.alert("All the order details in your invoice has been cleared.");
}
function clearInvoiceCustomerDetails() {
    localStorage.removeItem("dateD");
    localStorage.removeItem("invoiceNumberD");
    localStorage.removeItem("customerNameD");
    localStorage.removeItem("customerAddressD");
    localStorage.removeItem("customerPhoneD");
    window.alert("All the Customer details in your invoice has been cleared.");
}