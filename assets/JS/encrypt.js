function encrypt(stringToEncrypt) {
    var key = "g00BBl3uptHeWorLd!";
    var encryptedValue = CryptoJS.AES.encrypt(stringToEncrypt, key);
    return encryptedValue;
}