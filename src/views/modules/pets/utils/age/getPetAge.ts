export const getPetAgeString = (yearsAge: number, monthsAge: number): string => {
  const pluralizeYears = yearsAge !== 1 ? 's' : ''
  const pluralizeMonths = monthsAge !== 1 ? 'es' : ''

  if (isAgeZero(yearsAge) && isAgeZero(monthsAge)) return 'Recém-nascido.'

  if (yearsAge > 0 && monthsAge > 0) {
    return `${yearsAge} ano${pluralizeYears} e ${monthsAge} m${pluralizeMonths ? 'e' : 'ê'}s${pluralizeMonths}`
  } else if (yearsAge > 0) {
    return `${yearsAge} ano${pluralizeYears}`
  } else if (monthsAge > 0) {
    return `${monthsAge} m${pluralizeMonths ? 'e' : 'ê'}s${pluralizeMonths}`
  }

  return ''
}

const isAgeZero = (age: number): boolean => {
  return age === 0
}
