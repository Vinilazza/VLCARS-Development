

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




const elephantsArray = [
  {
    id: 1,
    title: "Brown elephant with Birds",
    color: "brown",
    age: 12,
    pictureUrl:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    imageAlt: "good looking elphant"
  },
  {
    id: 2,
    title: "Black elephant",
    color: "black",
    age: 10,
    pictureUrl:
      "https://images.unsplash.com/photo-1503286666306-61c9985f16cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=929&q=80",
    imageAlt: "dark elephant"
  },
  {
    id: 3,
    title: "Blue old elephant",
    color: "blue",
    age: 19,
    pictureUrl:
      "https://images.unsplash.com/photo-1482237935571-d9b52bffe142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    imageAlt: "papa elephant"
  },
  {
    id: 4,
    title: "Green Mamoth Elephant",
    color: "green",
    age: 8,
    pictureUrl:
      "https://images.unsplash.com/photo-1534692499281-57d0f101789b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    imageAlt: "playful elephant"
  }
];

// defining our variable to retrieve the html strings
// we asign an empty template string to htmlCode. We'll add something inside afterwards.

