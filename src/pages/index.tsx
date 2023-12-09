// ** React Imports
import { useEffect } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Hook Imports
import { UserRoleModel } from 'src/domain/models/user/UserRoleModel'
import { useAuth } from 'src/hooks/useAuth'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (roles: UserRoleModel[]) => {
  let homeRoute = '/'
  roles.forEach(role => {
    if (role.includes('ROLE_USER')) {
      homeRoute = '/acl'
    } else {
      homeRoute = '/home'
    }
  })

  return homeRoute
}

const Home = () => {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.roles.length) {
      const homeRoute = getHomeRoute(auth.user.roles)

      // Redirect user to Home URL
      router.replace(homeRoute)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
