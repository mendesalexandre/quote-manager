export function divideBillValue () {
  return `
    Exemplo:
    <br>
    Caso a opção 'parcelar o valor total' seja habilitada, <br>
    o sistema irá dividir o valor total pelo número de parcelas <br>
    e registrará uma parcela para cada mês consequente. <br>

    A fórmula aplicada será:<br><br>

    valorTotalDaConta / numeroPrestacoes = valorPorPrestacao<br><br>

    <strong>E.g.: 1500 / 10 = R$ 150,00</strong> será o valor pago<br>
    <strong>por</strong> prestação. Cada prestação será adicionada<br>
    como uma conta futura (primeira prestação fevereiro, última em dezembro
    por exemplo)<br><br>

    Caso a opção não seja habilitada, a fórmula será diferente:<br>

    valorTotalDaConta * numeroPrestacoes = valorPorPrestacao<br><br>
    <strong>E.g.: 1500 * 10 = R$ 15.000,00</strong> será o <br>
    valor total à ser pago <strong>após as dez prestações</strong><br>
    (primeira prestação fevereiro, última em dezembro por exemplo)
  `
}

export function preSaleTemplates () {
  return `
  Para cada template selecionado, será habilitado campos para preenchimento.<br>
  O <bold>template 2</bold> contém todas as funcionalidades do <bold>template 1</bold>,
  e o <bold>template 3</bold> contém todas as funcionalidades dos templates anteriores.
  <br><br>
  <strong>Template 1 (Plano plus)</strong>
  <br>-imagem do produto
  <br>-link de afiliação para venda
  <br>-alterar as cores de fundo
  <br><br>
  <strong>Template 2 (Plano professional)</strong>
  <br>-alterar o texto (manchete) da página
  <br>-alterar o texto do botão da página
  <br>-mostrar animação no botão de comprar
  <br><br>
  <strong>Template 3 (Plano enterprise)</strong>
  <br>-alterar o título da página
  <br>-editar a pre-sell
  <br>-apresentar 'últimas unidades a venda'
  <br>-selecionar o servidor de hospedagem da página
  <br>-descrição do produto
  <br>-informações sobre os nutrientes do produto
  <br>-fatores de confiabilidade na página elevados
  `
}

export default {
  divideBillValue,
  preSaleTemplates
}
