/**
 * Extracts and validates a zip code from a masked input.
 * @param {string} maskedZipcode - The masked zip code input (e.g., "12-34567-89012").
 * @returns {string | null} - The extracted and cleaned zip code, or null if the input is invalid.
 */
export const extractZipcode = (maskedZipcode: string): string | null => {
  return maskedZipcode.replace(/\D/g, '')
}

export const formatZipcode = (rawZipcode: string): string => {
  return rawZipcode.slice(0, 2) + '.' + rawZipcode.slice(2, 5) + '-' + rawZipcode.slice(5)
}
