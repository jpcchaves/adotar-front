import { Box, Breadcrumbs, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const DYNAMIC_ROUTE_IDENTIFIER = '['

const Breadcrumb = () => {
  const { pathname, push } = useRouter()

  const pathnames = pathname.split('/').filter(x => !x.includes(DYNAMIC_ROUTE_IDENTIFIER) && x)

  const breadcumbsMap: { [key: string]: string } = {
    '/pets': 'Pets',
    '/pets/novo': 'Novo',
    '/pets/meus-pets': 'Meus Pets',
    '/pets/editar': 'Editar'
  }

  return (
    <Box pl={2} mb={5}>
      <Breadcrumbs aria-label='breadcrumb' maxItems={2} sx={{ fontSize: '16px' }}>
        {pathnames.length &&
          pathnames.map((_, index) => {
            const last = index === pathnames.length - 1
            const to = `/${pathnames.slice(0, index + 1).join('/')}`

            return last ? (
              <Typography variant='overline' fontWeight={'bolder'} fontSize='12px' key={to}>
                {breadcumbsMap[to]}
              </Typography>
            ) : (
              <Typography
                onClick={() => push(to)}
                variant='overline'
                sx={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  opacity: '0.7',

                  ':hover': { opacity: 1 },
                  transition: '0.2s ease-in-out'
                }}
                fontWeight={'bold'}
                fontSize='12px'
              >
                {breadcumbsMap[to]}
              </Typography>
            )
          })}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
