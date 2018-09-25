const table = document.querySelector("#table-patients");
table.addEventListener("dblclick", function (event) {
  if (event.target.tagName == 'TD') {
    event.target.parentNode.remove()
  }
});