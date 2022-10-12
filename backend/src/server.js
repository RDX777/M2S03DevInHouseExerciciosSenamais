import app from "./app.js"

const PORTA = 3333

app.listen(PORTA, () => {
  console.log("Servidor iniciado na porta: " + PORTA)
})