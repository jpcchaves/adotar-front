import PetFormFirstStep from "../petFormFirstStep";
import PetFormSecondStep from "../petFormSecondStep";
import PetFormThirdStep from "../petFormThirdStep";

interface IProps {
  currentActiveStep: number;
}

const MultiStepPetForm = ({ currentActiveStep }: IProps) => {
  switch (currentActiveStep) {
    case 0:
      return <PetFormFirstStep />;
    case 1:
      return <PetFormSecondStep />;
    case 2:
      return <PetFormThirdStep />;
    default:
      return <PetFormFirstStep />;
  }
};

export default MultiStepPetForm;
