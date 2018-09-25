function calculatesBmi(weight, height) {
  var bmi = 0;
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

var title = document.querySelector(".title");
title.textContent = "Clinical Nutrition";

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
  var patient = patients[i];

  var tdWeight = patient.querySelector(".info-weight");
  var tdHeight = patient.querySelector(".info-height");
  var tdBmi = patient.querySelector(".info-bmi");

  var weight = tdWeight.textContent;
  var height = tdHeight.textContent;

  var validWeight = isValidWeight(weight);
  var validHeight = isValidHeight(height);

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
    var bmi = calculatesBmi(weight, height);
    tdBmi.textContent = bmi;
  }
}