const QrApi = "YOUR_API_KEY_HERE"  // Replace with your actual API key or endpoint

let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

function generateQrCode() {
    if (qrText.value.length > 0) {
        qrImage.src = QrApi + qrText.value;
        imgBox.classList.add("show-img")
    }
    else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
}