let theInnersOfMain = document.querySelector("main")

fetch("./page1.html")
.then(response=> response.text())
.then(data=> theInnersOfMain.innerHTML = data)

