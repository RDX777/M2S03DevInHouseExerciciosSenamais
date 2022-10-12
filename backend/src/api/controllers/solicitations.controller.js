let DADOSPEDIDOS = []

export function findAllSolicitations(request, response) {
  return response.status(200).json(DADOSPEDIDOS)
}

export function findSolicitation(request, response) {
  const pedidoLocalizado = DADOSPEDIDOS.find(pedido => pedido.id === request.params.id)
  if(pedidoLocalizado) {
    return response.status(200).json(pedidoLocalizado)
  }
  return response.status(404).json({message : "Nada foi localizado."})
}

export function destroySolicititation(request, response) {
  const { id } = request.params

  const item = DADOSPEDIDOS.filter(pedido => {
    return pedido.id !== id    
  })
  DADOSPEDIDOS = item
  return response.status(200).json({message : "Deletado com sucesso"})
}

export function createSolicitation(request, response) {
  const pedido = {
    id : uuidv4(),
    name : request.body.name,
    cpf : request.body.cpf,
    phone : request.body.phone,
    payment : request.body.payment,
    note : request.body.note,
    requestClient : request.body.requestClient,
    order : "EM PRODUÇÃO"
  }
  DADOSPEDIDOS.push(pedido)
  return response.status(201).json(pedido)
}
