import fs from "fs"

export const saveFilePizza = (json) => {
  fs.writeFileSync("./src/api/files_database/pizzas.file.json", json)
}

export const readFilePizza = () => {
  return fs.readFileSync("./src/api/files_database/pizzas.file.json").toString()
}

export const saveFileSolicitations = (json) => {
  fs.writeFileSync("./src/api/files_database/solicitations.file.json", json)
}

export const readFileSolicitations = () => {
  return fs.readFileSync("./src/api/files_database/solicitations.file.json").toString()
}