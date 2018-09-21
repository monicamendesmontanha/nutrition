var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function () {
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