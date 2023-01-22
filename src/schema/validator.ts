import * as yup from "yup";

const Schema = yup.object({
  amount: yup
    .number()
    .typeError("Deve ser um numero")
    .min(1000, "Valor mínimo de 1000 R$")
    .required("Valor Obrigatório"),
  installments: yup
    .number()
    .typeError("Deve ser um numero")
    .max(12, "Máximo de 12 parcelas")
    .min(0, "Mínimo de 0 parcelas"),
  mdr: yup
    .number()
    .typeError("Deve ser um numero")
    .max(100, "Deve ser maior ou igual a 100"),
});

export default Schema;
