function getPatientFromForm(form) {

    const patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculatesBmi(form.weight.value, form.height.value)
    }
    return patient;
}

function buildsTd(data, className) {
    const td = document.createElement("td");
    td.classList.add(className);
    td.textContent = data;

    return td;
}

function buildTr(patient) {
    const patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(buildsTd(patient.nome, "info-name"));
    patientTr.appendChild(buildsTd(patient.peso, "info-weight"));
    patientTr.appendChild(buildsTd(patient.altura, "info-height"));
    patientTr.appendChild(buildsTd(patient.gordura, "info-fat"));
    patientTr.appendChild(buildsTd(patient.imc, "info-bmi"));

    return patientTr;
}

function validatesPatient(patient) {
    const errors = [];

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
    const ul = document.querySelector("#errors-message");
    ul.innerHTML = "";

    errors.forEach(function (error) {
        const li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function addPatient(patient) {
    const patientTr = buildTr(patient);
    const table = document.querySelector("#table-patients");
    table.appendChild(patientTr);
}

const addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.querySelector("#form-add");

    const patient = getPatientFromForm(form);

    const errors = validatesPatient(patient);

    if (errors.length > 0) {
        showErrorsMessage(errors);
        return
    }

    addPatient(patient);

    form.reset();

    const errorsMessage = document.querySelector("#errors-message");
    errorsMessage.innerHTML = "";
});