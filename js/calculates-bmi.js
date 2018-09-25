function calculatesBmi(weight, height) {
  let bmi = 0;
  bmi = weight / (height * height);
  return bmi.toFixed(2);
}

function isValidWeight(weight) {
  if (weight > 0 && weight <= 1000) {
    return true;
  } else {
    return false;
  }
}

function isValidHeight(height) {
  if (height > 0 && height <= 3.00) {
    return true;
  } else {
    return false;
  }
}

const title = document.querySelector(".title");
title.textContent = "Clinical Nutrition";

const patients = document.querySelectorAll(".patient");

for (let i = 0; i < patients.length; i++) {
  const patient = patients[i];

  const tdWeight = patient.querySelector(".info-weight");
  const tdHeight = patient.querySelector(".info-height");
  const tdBmi = patient.querySelector(".info-bmi");

  const weight = tdWeight.textContent;
  const height = tdHeight.textContent;

  const validWeight = isValidWeight(weight);
  const validHeight = isValidHeight(height);

  if (!validWeight) {
    console.log("invalid weight", weight);
    tdBmi.textContent = "invalid weight";

    patient.classList.add("invalid-patient");
  }

  if (!validHeight) {
    console.log("invalid height", height);
    tdBmi.textContent = "invalid height";

    patient.classList.add("invalid-patient");
  }

  if (validWeight && validHeight) {
    let bmi = calculatesBmi(weight, height);
    tdBmi.textContent = bmi;
  }
}