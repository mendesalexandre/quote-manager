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
    finance: {
      lbl: {
        title: 'Minhas contas',
        billName: 'Nome da conta',
        tagName: 'Nome da tag'
      }
    },
    home: {
      lbl: {
        title: 'Página inicial',
        subTitle: 'ASPlus',
        search: 'Pesquisar',
        // Home
        menuTaskTodo: 'Tarefas à fazer',
        menuTaskDone: 'Tarefas completas',
        // Finances
        menuMyFinances: 'Minhas contas',
        menuMyCloseToOverdue: 'Contas à vencer',
        menuMyOverdueBills: 'Contas atrasadas',
        menuFinances: 'Minhas contas',
        menuDefaulters: 'Inadimplentes',
        menuReports: 'Relatórios',
        menuTags: 'Tags',
        menuIndicators: 'Indicadores',
        // Presale
        menuMyAds: 'Meus Anúncios',
        menuMyPresell: 'Páginas pré-venda',
        menuMyCampaigns: 'Campanhas',
        menuTips: 'Dicas',
        menuMyRoi: 'ROI',
        // Carrousel
        billToOverdue: 'Contas próximas do vencimento',
        billAlreadyOverdue: 'Contas vencidas ou atrasadas',
        access: 'Acessar',
        tasksTodo: 'Tarefas à serem feitas',
        tips: 'Dicas'
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
        about: 'Sobre',
        help: 'Ajuda & Feedback',
        logout: 'Sair...',
        titleAbout: 'Ambiente %s',
        descAbout: 'Ambientes estáveis e operacionais',
        dbOnText: 'Servidor de banco de dados online e estável',
        beOnText: 'Servidor de processamento de dados online e estável'
      }
    },
    login: {
      lbl: {
        title: 'Bem-vindo ao gestor de finanças',
        email: 'E-mail',
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
    newFinance: {
      lbl: {
        firstTitle: 'Dados gerais',
        secondTitle: 'Valores',
        thirdTitle: 'Finalizar',
        billName: 'Nome da conta',
        dueDate: 'Data de vencimento',
        billType: 'Tipo de movimento da conta',
        billPaid: 'Conta paga?',
        desc: 'Descrição',
        value: 'Valor R$',
        qtd: 'Número de prestações',
        tags: 'Selecione as tags',
        type: 'Tipo de despesa',
        divideValue: 'Dividir o valor em prestações?',
        reset: 'Reiniciar',
        addNewTag: 'Ou insira uma nova tag',
        starterTag: 'Contas fixa'
      },
      opt: {
        in: 'Entrada',
        out: 'Saída',
        select: '<Selecione>'
      }
    },
    newPresell: {
      lbl: {
        firstTitle: 'Sobre o produto',
        secondTitle: 'Estilização da página',
        thirdTitle: 'Finalizar',
        continue: 'Continuar',
        back: 'Voltar',
        finish: 'Finalizar',
        productName: 'Nome do produto',
        platform: 'Nome da plataforma',
        affiliateUrl: 'Link de afiliado',
        showLastChanceToBuy: 'Mostrar \'última chance para comprar\'?',
        image: 'Imagem do produto',
        colorBack1: 'Cor de fundo 1',
        colorBack2: 'Cor de fundo 2',
        buttonColor: 'Cor do botão',
        showButtonAnimation: 'Mostrar animação no botão?'
      }
    },
    newUser: {
      lbl: {
        firstTitle: 'Dados gerais',
        secondTitle: 'Senha',
        thirdTitle: 'Módulos e termos',
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
    userUpdate: {
      lbl: {
        userName: 'Nome do usuário',
        userEmail: 'Endereço de e-mail',
        oldPassword: 'Senha atual',
        newPassword: 'Senha nova'
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
    bills: {
      id: 'Identificador',
      user: 'Usuário',
      name: 'Nome da conta',
      dueDate: 'Vencimento',
      description: 'Descrição',
      value: 'Valor',
      quantityAmount: 'Nº Parcelas',
      tags: 'Tags',
      isCashEntry: 'Tipo de conta',
      isBillPayed: 'Conta paga',
      isToDivideValue: 'Valor parcelado',
      actions: 'Ações'
    },
    closeToOverdue: {
      id: 'Identificador',
      user: 'Usuário',
      name: 'Nome da conta',
      dueDate: 'Vencimento',
      desc: 'Descrição',
      value: 'Valor',
      qtd: 'Nº Parcelas',
      tags: 'Tags',
      isCashEntry: 'Tipo de conta',
      isBillPayed: 'Conta paga',
      isToDivideValue: 'Valor parcelado',
      actions: 'Ações'
    },
    history: {
      action: 'Tipo de ação',
      description: 'Descrição',
      eventDate: 'Data do evento'
    },
    notPaid: {
      name: 'Nome da conta',
      dueDate: 'Vencimento',
      value: 'Valor',
      actions: 'Ações'
    },
    presell: {
      productName: 'Nome do produto',
      onSince: 'Online desde',
      platform: 'Plataforma',
      actions: 'Ações'
    }
  },
  msg: {
    bill: {
      newSuccess: 'Conta cadastrada com sucesso',
      paidSuccess: 'Conta paga como sucesso',
      querySuccess: 'Sucesso ao consultar as contas',
      queryCloseToOverdueSuccess: 'Sucesso ao consultar contas próximas a vencer',
      queryBillNotPaidSuccess: 'Sucesso ao consultar contas não pagas'
    },
    login: {
      success: 'Sucesso ao efetuar login',
      error: '',
      networkError: 'Erro no servidor',
      wrongPass: ''
    },
    payBill: {
      title: 'Deseja realmente pagar a conta?',
      message: 'Uma vez feito, o processo não poderá ser desfeito!',
      successToPay: 'Sucesso ao pagar a conta',
      notPaidError: 'Erro ao pagar conta'
    },
    plan: {
      success: 'Sucesso ao consultar planos'
    },
    usr: {
      historySuccess: 'Sucesso ao consultar histórico'
    },
    tag: {
      newSuccess: 'Tag cadastrada com sucesso',
      querySuccess: 'Sucesso ao consultar as tags',
      deleteSuccess: 'Sucesso ao deletar a tag',
      tagAlreadyAdded: 'Tag já adicionada à lista'
    },
    task: {
      newSuccess: 'Tarefa cadastrada com sucesso',
      doneSuccess: 'Tarefa concluída com sucesso'
    },
    notMapped: 'Erro não mapeado',
    success: 'Sucesso ao executar a ação',
    error: 'Erro não mapeado',
    wait: 'Aguarde uns instantes...'
  },
  logs: {},
  components: {
    lbl: {
      buttonOk: 'Ok',
      buttonSearch: 'Pesquisar',
      buttonNew: 'Novo',
      buttonFinish: 'Finalizar',
      buttonReturn: 'Voltar',
      buttonContinue: 'Continuar',
      monthPicker: 'Mês/Ano',
      datePicker: 'Selecione uma data',
      inputRequire: 'Campo obrigatório',
      mandatory: '*Obrigatório',
      checkBoxRequire: 'Você precisa marcar a caixa acima', // TODO: End this translation properly
      searchInTable: 'Pesquisar',
      pagRecordsPerPage: 'Registros por página', // Records per page
      noDataLabel: 'Desculpa, não encontramos nada para você', // 'I didn\'t find anything for you',
      noResultsLabel: 'O filtro não localizou nenhum resultado', // 'The filter didn\'t uncover any results'
      filterTitle: 'Filtro',
      filterCaption: 'Preencha os campos para o filtro',
      close: 'Fechar',
      helpButton: 'Clique para obter ajuda',
      tableFullscreen: 'Tela cheia',
      tableToggleFullscreen: 'Sair da tela cheia'
    },
    tip: {
      edit: 'Editar',
      remove: 'Remover',
      new: 'Cadastrar',
      pay: 'Pagar',
      list: 'Lista',
      grid: 'Grade'
    }
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
