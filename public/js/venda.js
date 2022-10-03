form.addEventListener("submit", () => {
    const dados = {
      categoria: document.getElementById('categoria').value,
    }
    fetch("/api/insert-categoria", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
          if(data.status == "error") {
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
  
  
  
  
  
  
  
  
  
  
  