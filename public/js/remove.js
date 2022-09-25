form[1].addEventListener("submit", () => {
  const dados = {
    nome: document.getElementById('nomeCarro').value,
    modelo: document.getElementById('modeloCarro').value,
    cor: document.getElementById('corCarro').value,
    ano: document.getElementById('anoCarro').value,
    categoria: document.getElementById('cat').value,
    id: document.getElementById('mySelect3').value,
  }
  fetch("/api/edit", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(data => {
      if (data.status == "error") {
        success2.style.display = "none"
        error2.style.display = "block"
        error2.innerText = data.error
      } else {
        error2.style.display = "none"
        success2.style.display = "block"
        success2.innerText = data.success
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
        var item = interator.idcarros + " | " + interator.nome
        var element = document.createElement("option");
        element.innerText = item;
        selectElem.append(element);
      }
      for (const interator of data.success) {
        var selectElem = document.getElementById("mySelect3");
        var item = interator.idcarros
        var element = document.createElement("option");
        element.innerText = item;
        selectElem.append(element);
      }
      for (const interator of data.success) {
        var selectElem = document.getElementById("mySelect4");
        var item = interator.idcarros + " | " + interator.nome
        var element = document.createElement("option");
        element.innerText = item;
        selectElem.append(element);
      }

    }
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
        for (const interator of data.success) {
          var selectElem = document.getElementById("cat");
          var item = interator.categoria
          var element = document.createElement("option");
          element.innerText = item;
          selectElem.append(element);
        }
      }
    })
  

form[0].addEventListener("submit", () => {
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
        success.style.display = "none",
        error.style.display = "block",
        error.innerText = data.error
      } else {
        error.style.display = "none",
        success.style.display = "block",
        success.innerText = data.success
      }
    })
  })


