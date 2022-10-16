export interface QueryParamsFindSolicitation {
  name?: string
}

export interface RouteParamsFindSolicitation {
  id: string
}

export interface BodyParamsCreateSolicitation {
  name: string,
  cpf: string,
  phone: string,
  payment: string,
  note: string,
  requestClient: Array<string>,
  order: string
}