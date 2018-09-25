const table = document.querySelector("#table-patients");
table.addEventListener("dblclick", function (event) {
  if (event.target.tagName == 'TD') {

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
      event.target.parentNode.remove();
    }, 500);

    event.target.parentNode.remove()
  }
});