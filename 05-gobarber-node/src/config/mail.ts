interface IMailConfig {
  driver: 'ethereal' | 'ses'

  defaults: {
    from: {
      email: string
      name: string
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'juca@empreendimentos.com.br',
      name: 'Juca Empreendimentos',
    },
  },
} as IMailConfig
