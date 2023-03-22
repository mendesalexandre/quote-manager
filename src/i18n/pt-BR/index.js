export default {
  view: {
    closeToOverdue: {
      lbl: {
        title: 'Contas próximas do vencimento'
      }
    },
    defaulter: {
      lbl: {
        aa: 'bb'
      },
      msg: {
        success: '',
        error: ''
      },
      tip: {
        cc: 'aa'
      }
    },
    finance: {},
    home: {
      lbl: {
        title: 'Página inicial',
        subTitle: 'Gestor de finanças',
        search: 'Pesquisar',
        menuTaskTodo: 'Tarefas à fazer',
        menuTaskDone: 'Tarefas completas',
        menuMyFinances: 'Minhas contas',
        menuMyCloseToOverdue: 'Contas à vencer',
        menuMyOverdueBills: 'Contas atrasadas',
        menuFinances: 'Minhas contas',
        menuDefaulters: 'Inadimplentes',
        menuReports: 'Relatórios',
        menuTags: 'Tags',
        menuIndicators: 'Indicadores',
        billToOverdue: 'Contas próximas do vencimento',
        billAlreadyOverdue: 'Contas vencidas ou atrasadas',
        access: 'Acessar'
      },
      tip: {
        access: 'Clique para acessar os dados'
      }
    },
    notPaid: {
      lbl: {
        title: 'Contas atrasadas/vencidas'
      }
    },
    userSubMenu: {
      lbl: {
        changeTheme: 'Trocar tema',
        update: 'Atualizar dados',
        releaseNotes: 'Notas de atualização',
        history: 'Histórico',
        settings: 'Configurações',
        help: 'Ajuda &amp; Feedback',
        logout: 'Sair...'
      }
    },
    login: {
      lbl: {
        title: 'Bem-vindo ao gestor de finanças',
        login: 'Login',
        password: 'Senha',
        keepConnect: 'Mantenha-me conectado',
        newAccount: 'Criar nova conta',
        enter: 'Entrar'
      },
      tip: {
        newAccount: 'Clique para registrar-se',
        login: 'Clique para efetuar o login'
      }
    },
    newUser: {
      lbl: {
        firstTitle: 'Dados gerais',
        secondTitle: 'Senha',
        thirdTitle: 'Módulos e termos',
        continue: 'Continuar',
        back: 'Voltar',
        finish: 'Finalizar',
        fullName: 'Nome completo',
        userName: 'Usuário para login',
        mail: 'E-mail',
        password: 'Senha',
        repeatPass: 'Repita sua senha',
        save: 'Salvar',
        planBas: 'Básico',
        planPro: 'Profissional',
        planEnt: 'Enterprise',
        moduleOne: 'Finanças',
        moduleTwo: 'Indicadores (Beta)',
        moduleThree: 'Relatórios',
        moduleFourth: 'Tags',
        moduleFifth: 'Tasks',
        termAccepted: 'Aceito os termos'
      }
    },
    task: {},
    plan: {
      planOne: 'Gratuito', // Free
      planTwo: 'Plus', // Plus
      planThree: 'Empresarial', // Business
      planFour: 'Enterprise'
    }
  },
  columns: {
    closeToOverdue: {
      id: 'Identificador',
      user: 'Usuário',
      name: 'Nome da conta',
      dueDate: 'Vencimento',
      desc: 'Descrição',
      value: 'Valor',
      qtd: 'Nº Parcelas',
      tags: 'Tags',
      isCashEntry: 'Dinheiro de entrada',
      isBillPayed: 'Conta paga',
      isToDivideValue: 'Valor parcelado',
      actions: 'Ações'
    },
    notPaid: {
      name: 'Nome da conta',
      dueDate: 'Vencimento',
      value: 'Valor'
    }
  },
  msg: {
    bill: {
      newSuccess: 'Conta cadastrada com sucesso',
      paidSuccess: 'Conta paga como sucesso'
    },
    login: {
      success: 'Sucesso ao efetuar login',
      error: '',
      networkError: 'Erro no servidor',
      wrongPass: ''
    },
    plan: {
      success: 'Sucesso ao consultar planos'
    },
    task: {
      newSuccess: 'Tarefa cadastrada com sucesso',
      doneSuccess: 'Tarefa concluída com sucesso'
    },
    notMapped: 'Erro não mapeado',
    success: 'Sucesso ao executar a ação',
    error: 'Erro não mapeado'
  },
  logs: {},
  components: {
    buttonOk: 'Ok',
    buttonSearch: 'Pesquisar',
    buttonNew: 'Novo',
    monthPicker: 'Escolha um mês',
    inputRequire: 'Campo obrigatório',
    checkBoxRequire: 'Você precisa marcar a caixa acima', // TODO: End this translation properly
    searchInTable: 'Pesquisar',
    pagRecordsPerPage: 'Registros por página', // Records per page
    noDataLabel: '', // 'I didn\'t find anything for you',
    noResultsLabel: '' // 'The filter didn\'t uncover any results'
  },
  generic: {
    currencySymbol: 'R$',
    language: 'Idioma',
    msg: {
      success: 'Sucesso ao executar a ação',
      error: 'Ocorreu um erro inesperado'
    },
    status: {
      400: '',
      401: '',
      404: ''
    }
  }
}
