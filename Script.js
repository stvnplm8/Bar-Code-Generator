const input = document.getElementById("input");
const btn = document.getElementById("btn-barcode-generator");

btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "CODE128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
});

window.onload = () => {
  input.value = "";
};
