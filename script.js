let qrcode = new QRCode(
    document.querySelector(".qrcode")
);

qrcode.makeCode("Não tem nada aqui");

function generateQr() {
    if (
        document.querySelector("input")
            .value === "" ||
        document.querySelector("input")
            .value === " ") {
        alert(
            "Input não pode ser vazio!"
        );} 
    else {
        qrcode.makeCode(
            document.querySelector(
                "input"
            ).value);
}}