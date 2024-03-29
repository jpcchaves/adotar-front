import { Ability, AbilityBuilder } from '@casl/ability'
import { UserRoleModel } from 'src/domain/models/user/UserRoleModel'

export type Subjects = string
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type AppAbility = Ability<[Actions, Subjects]> | undefined

export const AppAbility = Ability as any
export type ACLObj = {
  action: Actions
  subject: string
}

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (roles: UserRoleModel[], subject: string) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  roles.forEach(role => {
    switch (role) {
      case 'ROLE_ADMIN':
        can('manage', 'all')
        break
      case 'ROLE_USER':
        can('manage', ['acl-page', 'second-page', 'pets', 'second-page', 'meus-pets', 'editar'])
        break
      default:
        can(['read', 'create', 'update', 'delete'], subject)
    }
  })

  return rules
}

export const buildAbilityFor = (roles: UserRoleModel[], subject: string): AppAbility => {
  return new AppAbility(defineRulesFor(roles, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object!.type
  })
}

export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
