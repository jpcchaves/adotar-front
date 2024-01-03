import { Grid, Typography } from '@mui/material'
import React from 'react'
import { getPreviewDataItems } from 'src/views/modules/pets/data/previewDataItems'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import FormStepControls from '../../../formStepsControls'
import TextPreviewField from '../../../textPreviewField'

interface IProps extends FormStepProps {
  activeStep: number
  handleBack: () => void
}

const DataGridItem = ({ label, defaultValue }: { label: string; defaultValue: string }) => (
  <Grid item xs={4}>
    <Typography variant='overline'>{label}</Typography>
    <TextPreviewField defaultValue={defaultValue} />
  </Grid>
)

const FifthStep = ({ validation, activeStep, handleBack }: IProps) => {
  const dataItems = getPreviewDataItems(validation)

  return (
    <>
      <Grid container spacing={5}>
        {dataItems.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} pb={0} mb={0}>
              <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {item.title}
              </Typography>
            </Grid>
            {item?.items.map((dataItem, indexDataItem) => (
              <DataGridItem key={indexDataItem} label={dataItem.label} defaultValue={dataItem.defaultValue} />
            ))}
          </React.Fragment>
        ))}

        <FormStepControls activeStep={activeStep} handleBack={handleBack} />
      </Grid>
    </>
  )
}

export default FifthStep
