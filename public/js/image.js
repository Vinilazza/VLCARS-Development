const inputFile = document.getElementById("file-input");
inputFile.onchange = function (e) {
  const file = e.target.files[0];
  const fileName = e.target.files[0].name;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    fetch("/store", {
      method: "POST",
      body: JSON.stringify({ image: reader.result, fileName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        inputFile.remove();
        const result = await res.json();
        let a = document.createElement("a");
        a.href = `/image/${result.id}`;
        a.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
};