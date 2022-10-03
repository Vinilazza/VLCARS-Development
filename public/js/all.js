
  const c = document.querySelector("#div1");
  const v = document.querySelector("#div2")
  
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
