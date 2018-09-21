function calculatesBmi(weight, height) {
  var bmi = 0;
  bmi = weight / (height * height);
  return bmi.toFixed(2);
}

function validWeight(weight) {
  if (weight < 0 && weight > 1000) {
    return true;
  } else {
    return false;
  }
}

function validHeight(height) {
  if (height < 0 && height > 3.00) {
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

  var validWeight = true;
  var validHeight = true;

  if (weight <= 0 || weight > 1000) {
    console.log("invalid weight");
    tdBmi.textContent = "invalid weight";
    validWeight = false;

    patient.classList.add("invalid-patient");
  }

  if (height <= 0 || height >= 3) {
    console.log("invalid height");
    tdBmi.textContent = "invalid height";
    validHeight = false;

    patient.classList.add("invalid-patient");
  }

  if (validWeight && validHeight) {
    var bmi = calculatesBmi(weight, height);
    tdBmi.textContent = bmi;
  }
}