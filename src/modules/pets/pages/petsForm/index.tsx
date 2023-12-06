import { useFormik } from "formik";
import petFormValidation from "modules/pets/utils/validation/petFormValidation";
import { useState } from "react";

const PetsForm = () => {
  const [activeFormStep, setActiveFormStep] = useState(0);
  const currentStepValidation = petFormValidation[activeFormStep];

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      description: "",
      color: "",
    },
    validationSchema: currentStepValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return <div>PetsForm</div>;
};

export default PetsForm;
