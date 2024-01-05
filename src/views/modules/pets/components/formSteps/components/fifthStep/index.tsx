import { Grid, Typography } from '@mui/material'
import React from 'react'
import { getPreviewDataItems } from 'src/views/modules/pets/data/previewDataItems'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import FormStepControls from '../../../formStepsControls'
import TextPreviewField from '../../../textPreviewField'
import { defineDataGridItemSize } from '../../utils/defineDataGridItemSize'

interface IProps extends FormStepProps {
  activeStep: number
  handleBack: () => void
}

const DataGridItem = ({ label, defaultValue, gridKey }: { label: string; defaultValue: string; gridKey: string }) => (
  <Grid item xs={defineDataGridItemSize(gridKey)}>
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
            {item?.items.map((dataItem, dataItemIdx) => (
              <DataGridItem
                key={`${dataItem.key}-${dataItemIdx}`}
                gridKey={dataItem.key}
                label={dataItem.label}
                defaultValue={dataItem.defaultValue}
              />
            ))}
          </React.Fragment>
        ))}

        <FormStepControls activeStep={activeStep} handleBack={handleBack} />
      </Grid>
    </>
  )
}

export default FifthStep
