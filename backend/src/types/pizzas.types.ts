export interface QueryParamsFindPizza {
  name?: string
}

export interface RouteParamsFindPizza {
  id: string
}

export interface BodyParamsCreatePizza {
  name: string,
  description: string,
  price: number,
  ingredients: Array<string>
}