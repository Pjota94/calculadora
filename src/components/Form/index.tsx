import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MainContext } from "../../context/MainContext";
import { ICalcPro } from "../../interfaces";
import { ContainerForm } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "../../schema/validator";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICalcPro>({ resolver: yupResolver(Schema) });
  const { sendValues } = useContext(MainContext);

  return (
    <ContainerForm onSubmit={handleSubmit(sendValues)}>
      <label>Informe o valor da venda *</label>
      <input type="number" {...register("amount")} required />
      <p>{errors.amount?.message}</p>
      <label>Em quantas parcelas *</label>
      <input type="number" {...register("installments")} required />
      <p>{errors.installments?.message}</p>
      <label>Informe o percentual MDR *</label>
      <input type="number" {...register("mdr")} required />
      <p>{errors.mdr?.message}</p>
      <button type="submit">Enviar</button>
    </ContainerForm>
  );
};

export default Form;
