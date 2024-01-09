import { Box, Breadcrumbs, Typography, styled } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyledLink = styled(Link)<{}>`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 'normal';
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fff;
  }
`

const Breadcrumb = () => {
  const { pathname } = useRouter()

  const pathnames = pathname.split('/').filter(x => x)

  const breadcumbsMap: { [key: string]: string } = {
    '/pets': 'Pets',
    '/pets/novo': 'Novo',
    '/pets/meus-pets': 'Meus Pets'
  }

  return (
    <Box pl={2} mb={5}>
      <Breadcrumbs aria-label='breadcrumb' maxItems={2}>
        {pathnames.map((_, index) => {
          const last = index === pathnames.length - 1
          const to = `/${pathnames.slice(0, index + 1).join('/')}`

          return last ? (
            <Typography style={{ color: 'white' }} key={to}>
              {breadcumbsMap[to]}
            </Typography>
          ) : (
            <StyledLink href={to} key={to}>
              {breadcumbsMap[to]}
            </StyledLink>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default Breadcrumb
