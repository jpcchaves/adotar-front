import { Grid, Typography } from '@mui/material'
import TextPreviewField from 'src/views/modules/pets/components/textPreviewField'
import { PetFormKeys } from '../formSteps/Enum/PetFormKeys'
import { defineDataGridItemSize } from '../formSteps/utils/defineDataGridItemSize'

interface IProps {
  label: string
  defaultValue: string
  gridKey: PetFormKeys
}

const DataGridItem = ({ label, defaultValue, gridKey }: IProps) => (
  <Grid item xs={defineDataGridItemSize(gridKey)}>
    <Typography variant='overline'>{label}</Typography>
    <TextPreviewField defaultValue={defaultValue} />
  </Grid>
)

export default DataGridItem
