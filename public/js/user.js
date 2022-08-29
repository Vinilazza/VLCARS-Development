
form.addEventListener("submit", () => {
  fetch("/api/get-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(data => {
      if (data.status == "error") {
        console.log("ERROR")

      } else {

        document.getElementById("vini").innerHTML += "<table border=1 width=100%><tr>";
        for(const interator of data.success)
        {
            document.getElementById("vini").innerHTML += "<td align=center style='color:#fff'>"+interator.email+"</td>";
        }
        document.getElementById("vini").innerHTML += "</tr></table>";

        console.log(data.success)
        return data.success
        console.log("sucesso!")
      }
    })
})
