fetch("/api/getCar", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}).then(res => res.json())
  .then(data => {
    if (data.status == "error") {
      console.log("ERROR")

    } else {

      const interator = data.success;
      // Extract value from table header. 
      // ('Book ID', 'Book Name', 'Category' and 'Price')
      let col = [];
      for (let i = 0; i < interator.length; i++) {
        for (let key in interator[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      // Create table.
      const table = document.createElement("table");

      // Create table header row using the extracted headers above.
      let tr = table.insertRow(-1);                   // table row.

      for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // table header.
        th.innerHTML = col[i];

        tr.appendChild(th);


      }

      // add json data to the table as rows.
      for (let i = 0; i < interator.length; i++) {

        tr = table.insertRow(-1); 


        for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = interator[i][col[j]];

        }
      }

      // Now, add the newly created table with json data, to a container.
      const divShowData = document.getElementById('vini');
      divShowData.innerHTML = "";
      divShowData.appendChild(table);
    }
    return data.success
    console.log("sucesso!")
  }

  )

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
  
  
  
  form.addEventListener("submit", () => {
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
    })
    
