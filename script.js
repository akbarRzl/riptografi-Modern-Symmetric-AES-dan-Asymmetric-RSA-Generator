// Fungsi untuk menampilkan bagian AES
function showAES() {
    document.getElementById('aesSection').style.display = 'block';
    document.getElementById('rsaSection').style.display = 'none';
}

// Fungsi untuk menampilkan bagian RSA
function showRSA() {
    document.getElementById('aesSection').style.display = 'none';
    document.getElementById('rsaSection').style.display = 'block';
}

// Fungsi untuk enkripsi AES
function encryptAES() {
    var key = document.getElementById('aesKey').value;
    var message = document.getElementById('aesMessage').value;
    var encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById('aesOutput').textContent = 'Hasil Enkripsi: ' + encrypted;
}

// Fungsi untuk deskripsi AES
function decryptAES() {
    var key = document.getElementById('aesKey').value;
    var encryptedMessage = document.getElementById('aesMessage').value;
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    var decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('aesOutput').textContent = 'Hasil Deskripsi: ' + decrypted;
}

// Fungsi untuk enkripsi RSA
function encryptRSA() {
    var plaintext = document.getElementById('rsaPlaintext').value;
    var encrypted = KJUR.crypto.Cipher.encrypt(plaintext, publicKey);
    document.getElementById('rsaCiphertext').value = encrypted;
}

// Fungsi untuk deskripsi RSA
function decryptRSA() {
    var ciphertext = document.getElementById('rsaCiphertext').value;
    var decrypted = KJUR.crypto.Cipher.decrypt(ciphertext, privateKey);
    document.getElementById('rsaPlaintext').value = decrypted;
}

// Generate RSA key pair with 2048-bit modulus
var rsaKey = KEYUTIL.generateKeypair("RSA", 2048);
var publicKey = rsaKey.pubKeyObj;
var privateKey = rsaKey.prvKeyObj;
