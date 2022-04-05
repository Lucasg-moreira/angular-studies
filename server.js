const express = require("express")


const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.static(__dirname + "/dist/iniciando-angular"))

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/dist/iniciando-angular/index.html")
})

app.listen(PORT, () => {
  console.log("listen on port " + PORT)
})
