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

    patient.classList.add("invalid-patient");
  }

  if (height <= 0 || height >= 3) {
    console.log("invalid height");
    tdBmi.textContent = "invalid height";
    validHeight = false;

    patient.classList.add("invalid-patient");
  }

  if(validWeight && validHeight) {
    var bmi = weight / (height * height);
    tdBmi.textContent = bmi.toFixed(2);   
  }
}

var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function() {
  event.preventDefault();

  var form = document.querySelector("#form-add");

  var name = form.name.value;
  var weight = form.weight.value;
  var height = form.height.value;
  var fat = form.fat.value;

  var patientTr = document.createElement("tr");

  var nameTd = document.createElement("td");
  var weightTd = document.createElement("td");
  var heightTd = document.createElement("td");
  var fatTd = document.createElement("td");
  var bmiTd = document.createElement("td");

  nameTd.textContent = name;
  weightTd.textContent = weight;
  heightTd.textContent = height;
  fatTd.textContent = fat;

  patientTr.appendChild(nameTd);
  patientTr.appendChild(weightTd);
  patientTr.appendChild(heightTd);
  patientTr.appendChild(fatTd);

  var table = document.querySelector("#table-patients");

  table.appendChild(patientTr);
});


