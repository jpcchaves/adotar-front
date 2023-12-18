export const getInputLabel = (inputLabel: string, isRequired: boolean): string =>
  isRequired ? `${inputLabel} *` : inputLabel
