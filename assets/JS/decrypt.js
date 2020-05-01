function decrypt(stringToDecrypt) {
    if (stringToDecrypt == null) {
        return stringToDecrypt;
    }
    var key = "g00BBl3uptHeWorLd!";
    var decryptedValue = CryptoJS.AES.decrypt(stringToDecrypt, key).toString(CryptoJS.enc.Utf8);
    return decryptedValue;
}