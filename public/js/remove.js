form.addEventListener("submit", () => {
  const dados = {
    nome: document.getElementById('nomeCarro').value,
    modelo: document.getElementById('modeloCarro').value,
    cor: document.getElementById('corCarro').value,
    ano: document.getElementById('anoCarro').value,
    id: document.getElementById('mySelect').value,
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
  fetch("/api/getCar", {
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
        for (const interator of data.success) {
          var selectElem = document.getElementById("mySelect");
          var item = interator.idcarros
          var element = document.createElement("option");
          element.innerText = item;
          selectElem.append(element);
        }
        for (const interator of data.success) {
          var selectElem = document.getElementById("mySelect2");
          var item = interator.idcarros+" | "+interator.nome
          var element = document.createElement("option");
          element.innerText = item;
          selectElem.append(element);
        }
      
      }
    })
  
  
  
    function remove() {
      const dados = {
        modelo: document.getElementById('mySelect').value,
      }
      fetch("/api/remove", {
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
    }

    
