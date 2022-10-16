import { saveFileSolicitations, readFileSolicitations } from "../database/connection.js"

export const create = (solicitacao) => {

  let dados = JSON.parse(readFileSolicitations())
  dados.push(solicitacao)
  saveFileSolicitations(JSON.stringify(dados))

}

export const find = (name) => {

  const dados = JSON.parse(readFileSolicitations())
  return dados.filter(solicitacao => solicitacao.name.toLowerCase().includes(name.toLowerCase()))

}

export const destroy = (id) => {

  let dados = JSON.parse(readFileSolicitations())
  const item = dados.filter(solicitacao => {
    return solicitacao.id !== id
  })

  saveFileSolicitations(JSON.stringify(item))

}

export const update = (id, solicitacao) => {
  
  let dados = JSON.parse(readFileSolicitations())

  const item = dados.map(slc => {
    if(id === slc.id) {
      slc.name = solicitacao.name || slc.name
      slc.cpf = solicitacao.cpf || slc.cpf
      slc.phone = solicitacao.phone || slc.phone
      slc.payment = solicitacao.payment || slc.payment
      slc.note = solicitacao.note || slc.note
      slc.requestClient = solicitacao.requestClient || slc.requestClient
      slc.order = solicitacao.order || slc.order
    }
    return slc
  })

  saveFileSolicitations(JSON.stringify(item))

}
