import { Gender } from 'src/domain/enum/pet/Gender'

export const getGenderString = (genderChar: Gender) => (genderChar === Gender.M ? 'Macho' : 'Fêmea')
