function calculateFee() {
  const courseSelect = document.getElementById("courseSelect").value;
  const github = document.getElementById("github").checked;
  const certificate = document.getElementById("certificate").checked;
  const discount = document.getElementById("discount").value.trim();

  let baseFee = 0;
  if (courseSelect == "4") baseFee = 200;
  else if (courseSelect == "8") baseFee = 380;
  else if (courseSelect == "12") baseFee = 550;

  if (github) baseFee += 50;
  if (certificate) baseFee += 30;

  // Apply discount code
  if (discount === "SAVE20") {
    baseFee *= 0.9; // 10% discount
  }

  document.getElementById("total").innerText =
    "Total Fee: $" + baseFee.toFixed(2);
}
