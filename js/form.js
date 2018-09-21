function getPatientFromForm(form) {

  var patient = {
    name: form.name.value,
    weight: form.weight.value,
    height: form.height.value,
    fat: form.fat.value,
    bmi: calculatesBmi(form.weight.value, form.height.value)
  }
  return patient;
}

function buildsTd(data, className) {
  var td = document.createElement("td");
  td.classList.add(className);
  td.textContent = data;

  return td;
}

function buildTr(patient) {
  var patientTr = document.createElement("tr");
  patientTr.classList.add("patient");

  patientTr.appendChild(buildsTd(patient.name, "info-name"));
  patientTr.appendChild(buildsTd(patient.weight, "info-weight"));
  patientTr.appendChild(buildsTd(patient.height, "info-height"));
  patientTr.appendChild(buildsTd(patient.fat, "info-fat"));
  patientTr.appendChild(buildsTd(patient.bmi, "info-bmi"));

  return patientTr;
}

var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-add");

  var patient = getPatientFromForm(form);

  var patientTr = buildTr(patient);

  var table = document.querySelector("#table-patients");

  table.appendChild(patientTr);

  form.reset();
});