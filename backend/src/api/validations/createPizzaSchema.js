import * as yup from "yup"

export const createPizzaSchema = yup.object().shape({
  name:
    yup
      .string("O Nome deve ser um texto")
      .required("O campo nome  é necessario"),
  description:
    yup
      .string("A descrição deve ser um texto")
      .required("O campo descrição é necessario"),
  price:
    yup
      .number("O preço deve ser um numero")
      .positive()
      .required("O campo preço é necessario"),
  ingredients:
    yup
      .array()
      .required("O campo ingredientes é necessario"),
})