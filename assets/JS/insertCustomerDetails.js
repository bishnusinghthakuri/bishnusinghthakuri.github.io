function insertCustomerDetails() {
    //recieve values
    //receivedate("date");
    // receiveValues("invoiceNumber");
    //receiveString("customerName");
    //receiveString("customerAddress");
    //receiveValues("customerPhone");

    // insert values
    localStorage.setItem("dateD", encrypt(Date(receiveValues("date"))));
    //valueViewer("dateD", "Date : ", receiveValues("date"), "");
    localStorage.setItem("invoiceNumberD", encrypt(String(receiveValues("invoiceNumber"))));
    //valueViewer("invoiceNumberD", "Invoice Number : ", receiveValues("invoiceNumber"), "");
    localStorage.setItem("customerNameD", encrypt(receiveString("customerName")));
    //valueViewer("customerNameD", "Customer Name : ", receiveString("customerName"), "");
    localStorage.setItem("customerAddressD", encrypt(receiveString("customerAddress")))
    //valueViewer("customerAddressD", "Address : ", receiveString("customerAddress"), "");
    localStorage.setItem("customerPhoneD", encrypt(String(receiveValues("customerPhone"))))
    //valueViewer("customerPhoneD", "Phone : ", receiveValues("customerPhone"), "");
    snackBar(receiveString("customerName") + " is added to the invoice.")
}