function convertNumber(number, sourceBase, targetBase) {
  const digits = "0123456789ABCDEF";

  let decimal = 0;
  let power = 1; 
  number = number.toUpperCase();

  for (let i = number.length - 1; i >= 0; i--) {
    const digitValue = digits.indexOf(number[i]);
    if (digitValue === -1 || digitValue >= sourceBase) {
      return "Neplatné číslo pro tuto soustavu!";
    }
    decimal += digitValue * power;
    power *= sourceBase;
  }


  if (decimal === 0) return "0";

  let result = "";
  while (decimal > 0) {
    const remainder = decimal % targetBase;
    result = digits[remainder] + result;
    decimal = Math.floor(decimal / targetBase);
  }

  return result;
}

document.getElementById("convertBtn").addEventListener("click", function() {
  const number = document.getElementById("number").value.trim();
  const sourceBase = parseInt(document.getElementById("sourceBase").value);
  const targetBase = parseInt(document.getElementById("targetBase").value);

  const result = convertNumber(number, sourceBase, targetBase);
  document.getElementById("result").textContent = result;
});
