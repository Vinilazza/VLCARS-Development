form.addEventListener("submit", () => {
  const manipulate = {
    manipulate: document.getElementById("vini")
  }
  fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(manipulate),
    headers: {
     "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(data => {
      if(data.status == "error") {
        console.log("ERROR")
        
      } else {
        console.log(v)
        console.log("sucesso!")
      }
    })
})