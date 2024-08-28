function encrypt() {
    let input = document.getElementById("inputText").value;
    let encrypted = btoa(input); // Encriptación sencilla usando base64
    document.getElementById("outputText").value = encrypted;
}

function decrypt() {
    let input = document.getElementById("inputText").value;
    try {
        let decrypted = atob(input); // Desencriptar usando base64
        document.getElementById("outputText").value = decrypted;
    } catch (e) {
        alert("El texto proporcionado no está en un formato encriptado válido.");
    }
}
