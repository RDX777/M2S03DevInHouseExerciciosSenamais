import * as yup from "yup"

export const createSolicitationsSchema = yup.object().shape({
  name:
    yup
      .string("O Nome deve ser um texto")
      .required("O campo nome  é necessario"),
  cpf:
    yup
      .string("O cpf deve ser um texto")
      .required("O campo cpf é necessario"),
  phone:
    yup
      .string("O phone deve ser um numero")
      .required("O campo phone é necessario"),
  payment:
    yup
      .string("O phone deve ser um numero")
      .required("O campo phone é necessario"),
  note:
    yup
      .string("O phone deve ser um numero")
      .required("O campo phone é necessario"),
  requestClient:
    yup
      .array()
      .required("O campo ingredientes é necessario"),
})
