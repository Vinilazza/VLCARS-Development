form.addEventListener("submit", () => {
  const dados = {
    nome: document.getElementById('nomeCarro').value,
    modelo: document.getElementById('modeloCarro').value,
    cor: document.getElementById('corCarro').value,
    ano: document.getElementById('anoCarro').value
  }
  fetch("/api/insert-model", {
    method: "POST",
    body: JSON.stringify(dados),
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
        error.style.display = "none"
        success.style.display = "block"
        success.innerText = data.success
      }
    })
})

fetch("/api/getCategoria", {
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
      for(const interator of data.success)
      {
        var selectElem = document.getElementById("mySelect"); 
        var item = interator.categoria
        var element = document.createElement("option");
        element.innerText = item;
        selectElem.append(element);
      }
    }
  })










