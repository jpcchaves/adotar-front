import { ProfileTabs } from '../../models/enum/ProfileTabs'

export const profileTabsData = {
  [ProfileTabs.DadosBasicos]: {
    label: 'Dados Básicos',
    icon: 'mdi:account'
  },
  [ProfileTabs.AtualizarSenha]: {
    label: 'Atualizar Senha',
    icon: 'mdi:password'
  },
  [ProfileTabs.Endereco]: {
    label: 'Endereço',
    icon: 'mdi:house'
  },
  [ProfileTabs.Contato]: {
    label: 'Contato',
    icon: 'mdi:phone'
  }
}
