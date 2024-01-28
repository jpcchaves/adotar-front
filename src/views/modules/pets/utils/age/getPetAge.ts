export const getPetAgeString = (yearsAge: number, monthsAge: number): string => {
  const pluralizeYears = yearsAge !== 1 ? 's' : ''
  const pluralizeMonths = monthsAge !== 1 ? 'es' : ''

  if (isAgeZero(yearsAge) && isAgeZero(monthsAge)) return 'Recém-nascido'

  let result = ''

  if (yearsAge > 0) {
    result += `${yearsAge} ano${pluralizeYears}`
  }

  if (monthsAge > 0) {
    if (result !== '') {
      result += ' e '
    }
    result += `${monthsAge} m${pluralizeMonths ? 'e' : 'ê'}s${pluralizeMonths}`
  }

  return result
}

const isAgeZero = (age: number): boolean => {
  return age === 0
}
