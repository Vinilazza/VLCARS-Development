form.addEventListener("submit", () => {
  const manipulate = {
    manipulate: vini.value
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
        console.log("SUcess")
        manipulate.innerHTML = "Sucesso"
      }
    })
})