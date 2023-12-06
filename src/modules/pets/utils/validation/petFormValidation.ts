import * as Yup from "yup";

export default [
  Yup.object({
    name: Yup.string().required("O campo é obrigatório"),
  }),
  Yup.object({
    color: Yup.string().required("O campo é obrigatório"),
  }),
  Yup.object({
    description: Yup.string().required("O campo é obrigatório"),
  }),
];
