const CryptoJS = require('crypto-js');

function encrypted(email) {
  const ciphertext = CryptoJS.AES.encrypt(email, 'secret key 123').toString();
  /* // Decrypt
  var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  var originalText = bytes.toString(CryptoJS.enc.Utf8); */
  // Encrypt
  return ciphertext;
}

export default encrypted;
