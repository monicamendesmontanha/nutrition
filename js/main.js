var title = document.querySelector(".title");
title.textContent = "Clinical Nutrition";

var patient = document.querySelector("#first-patient");

var tdWeight = patient.querySelector(".info-weight");
var weight = tdWeight.textContent;

var tdHeight = patient.querySelector(".info-height");
var height = tdHeight.textContent;

console.log(patient);
console.log(tdWeight);
console.log(weight);
console.log(tdHeight);
console.log(height);


var tdBmi = patient.querySelector(".info-bmi");
var bmi = weight / (height * height);
tdBmi.textContent = bmi;
