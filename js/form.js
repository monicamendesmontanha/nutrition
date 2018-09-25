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

function validatesPatient(patient) {
    var errors = [];

    if (patient.name.length == 0) {
        errors.push("The name cannot be blank");
    }

    if (patient.weight.length == 0) {
        errors.push("The weight cannot be blank");
    }

    if (patient.height.length == 0) {
        errors.push("The height cannot be blank");
    }

    if (patient.fat.length == 0) {
        errors.push("The fat cannot be blank");
    }

    if (!isValidWeight(patient.weight)) {
        errors.push("Invalid weight");
    }

    if (!isValidHeight(patient.height)) {
        errors.push("Invalid height");
    }

    return errors;
}

function showErrorsMessage(errors) {
    var ul = document.querySelector("#errors-message");
    ul.innerHTML = "";

    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-add");

    var patient = getPatientFromForm(form);

    var patientTr = buildTr(patient);

    var errors = validatesPatient(patient);

    if (errors.length > 0) {
        showErrorsMessage(errors);
        return
    }

    var table = document.querySelector("#table-patients");
    table.appendChild(patientTr);
    form.reset();

    var errorsMessage = document.querySelector("#errors-message");
    errorsMessage.innerHTML = "";
});