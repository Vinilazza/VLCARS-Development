
const c = document.querySelector("#div1");
const v = document.querySelector("#div2");
const b = document.querySelector("#div3")

function cadastrar() {
  c.style.display = isExpanded ? "none" : ""
  isExpanded = !isExpanded
  v.style.display = "none"
}
var isExpanded = false;
function editar() {
  v.style.display = isExpanded ? "none" : ""
  isExpanded = !isExpanded
  c.style.display = "none"
}
function close() {
  b.style.display = "none"
  console.log("a")
}


function busca() {
  const dados = {
    valor: document.querySelector("#search").value
  }
  fetch("/api/search", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(data => {
      if (data.status == "error") {
        console.log("ERROR")

      } else {
        
          if (data.success == "") {
            const error = document.getElementById("error2")
            error.style.display = "";
            error.textContent = "Não foi encontrado resultados"
            const divShowData = document.getElementById('div3');
            divShowData.innerHTML = "";
            document.getElementById("btn3").style.display = "none"
          }
          else {
            const error = document.getElementById("error2")
            error.style.display = "none"
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
            const divShowData = document.getElementById('div3');
            divShowData.innerHTML = "";
            divShowData.appendChild(table)
          }

        }
      
      
    


      return data.success
      console.log("sucesso!")
    }

    )

}
  

