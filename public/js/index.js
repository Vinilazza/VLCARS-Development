

// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, title, color, age, image and alt description.
function redc(e) {
  window.location = "/search";
  busca()
}
document.getElementById("btn-submit").addEventListener("click", (ev) => {
  ev.preventDefault();
  if (filename == "/search") {
  }
  else {
    redc(event)
  }
})
