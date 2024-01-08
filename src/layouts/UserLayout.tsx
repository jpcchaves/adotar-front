// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import HorizontalNavItems from 'src/navigation/horizontal'
import VerticalNavItems from 'src/navigation/vertical'

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'

import HorizontalAppBarContent from './components/horizontal/AppBarContent'
import VerticalAppBarContent from './components/vertical/AppBarContent'

// ** Hook Import
import { Box, Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
  contentHeightFixed?: boolean
}

const UserLayout = ({ children, contentHeightFixed }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  const { pathname } = useRouter()

  const pathnames = pathname.split('/').filter(x => x)

  const breadcumbsMap: { [key: string]: string } = {
    '/pets': 'Pets',
    '/pets/novo': 'Novo'
  }

  // ** Vars for server side navigation
  // const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()
  // const { menuItems: horizontalMenuItems } = ServerSideHorizontalNavItems()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          navItems: VerticalNavItems()

          // Uncomment the below line when using server-side menu in vertical layout and comment the above line
          // navItems: verticalMenuItems
        },
        appBar: {
          content: props => (
            <VerticalAppBarContent
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
              toggleNavVisibility={props.toggleNavVisibility}
            />
          )
        }
      }}
      {...(settings.layout === 'horizontal' && {
        horizontalLayoutProps: {
          navMenu: {
            navItems: HorizontalNavItems()

            // Uncomment the below line when using server-side menu in horizontal layout and comment the above line
            // navItems: horizontalMenuItems
          },
          appBar: {
            content: () => <HorizontalAppBarContent settings={settings} saveSettings={saveSettings} />
          }
        }
      })}
    >
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
              <Link
                style={{ color: 'rgba(255, 255, 255, 0.7)', padding: '0', textDecoration: 'none' }}
                href={to}
                key={to}
                onMouseOver={e => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.textDecoration = 'underline'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  e.currentTarget.style.textDecoration = 'none'
                }}
              >
                {breadcumbsMap[to]}
              </Link>
            )
          })}
        </Breadcrumbs>
      </Box>

      {children}
    </Layout>
  )
}

export default UserLayout
