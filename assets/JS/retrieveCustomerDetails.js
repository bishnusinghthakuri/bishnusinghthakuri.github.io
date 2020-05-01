function retrieveCustomerDetails() {
    valueViewer("invoiceNumberD", "Invoice Number : ", decrypt(localStorage.getItem("invoiceNumberD")), "");
    valueViewer("dateD", "Date : ", decrypt(localStorage.getItem("dateD")), "");
    valueViewer("customerNameD", "Customer Name : ", decrypt(localStorage.getItem("customerNameD")), "");
    valueViewer("customerAddressD", "Address : ", decrypt(localStorage.getItem("customerAddressD")), "");
    valueViewer("customerPhoneD", "Phone : ", decrypt(localStorage.getItem("customerPhoneD")), "");
}