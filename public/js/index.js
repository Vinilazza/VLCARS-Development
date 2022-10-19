

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


fetch("/api/getAllData", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}).then(res => res.json())
  .then(data => {
    if (data.status == "error") {
      success.style.display = "none"
      error.style.display = "block"
      error.innerText = data.error
    } else {
      console.log("sucess")
      let htmlCode = ``;

      // to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.
      const interator = data.success;
      interator.forEach(function (data) {
        // uncomment the line below, to see each of the 4 objects rendered in the console.
        //console.log(singleElephantObjects);

        // we take our previous empty htmlCode variable and add our html codes to it.

        // because the forEach method returns objects, we can then use the dot notation to reference children of the object, e.g, elephant.title;
        htmlCode =
          htmlCode +
          `
    <div class="card" style="width: 18rem;">
  <img src="${data.file_data}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
        // uncomment the line below to see the output in the browser console.
        // console.log(htmlCode);
      });

      // currently, we have out html code showing in the browser console, we need to send it to our html file and render it there.
      // here we define out the cards we want to be rendered to the DOM.

      // ".all-elephant-cards" is the class of the empty div back in our index.html. We want to render the cards from our JS inside that div.

      // we are simply saying, "let elephantCards be = to that div", to target that div, we reference the class we gave to it.
      const elephantCards = document.querySelector("#vini2");

      // here's how we do the render;
      // since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
      elephantCards.innerHTML = htmlCode;
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

