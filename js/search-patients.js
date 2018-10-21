var buttonAdd = document.querySelector("#search-patients");

buttonAdd.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    console.log(">>>LOAD");

    var erroAjax = document.querySelector("#error-ajax");

    if (xhr.status == 200) {
      console.log(">>>SUCESSO", xhr.status);
      erroAjax.classList.add("invisible");
      var response = xhr.responseText;
      var patients = JSON.parse(response);

      patients.forEach(function (patient) {
        addPatient(patient);
      });
    } else {
      console.log("ELSE", xhr.status);
      erroAjax.classList.remove("invisible");
    }
  });

  xhr.send();
});