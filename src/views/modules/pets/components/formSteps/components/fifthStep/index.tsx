import { Grid, Typography } from '@mui/material'
import React from 'react'
import { getPreviewDataItems } from 'src/views/modules/pets/data/previewDataItems'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import DataGridItem from '../../../dataGridItem'
import PetPicturesPreview from '../../../picPicturesPreview'

interface IProps extends FormStepProps {
  activeStep: number
}

const FifthStep = ({ validation }: IProps) => {
  const dataItems = getPreviewDataItems(validation)

  return (
    <>
      <Grid item xs={12} pb={0} mb={0}>
        <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.primary' }}>
          Fotos
        </Typography>
      </Grid>

      <PetPicturesPreview petPictures={validation.values.petPictures} />

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
      </Grid>
    </>
  )
}

export default FifthStep
