var title = document.querySelector(".title");
title.textContent = "Clinical Nutrition";

var patients = document.querySelectorAll(".patient");

for(var i = 0; i < patients.length ; i++) {
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
  }

  if (height <= 0 || height >= 3) {
    console.log("invalid height");
    tdBmi.textContent = "invalid height";
    validHeight = false;
  }

  if(validWeight && validHeight) {
    var bmi = weight / (height * height);
    tdBmi.textContent = bmi.toFixed(2);   
  }
}


