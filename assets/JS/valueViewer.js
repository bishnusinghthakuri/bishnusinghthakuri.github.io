function valueViewer(elementId, prefixString, value, suffixString) {
    if (!(value == null)) {
        document.getElementById(elementId).innerHTML = prefixString + value + suffixString;
    }
}