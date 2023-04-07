export function divideBillValue () {
  return `
    Exemplo:
    <br><br>
    Caso a opção 'parcelar o valor total' seja marcada, <br>
    o sistema irá aplicar a seguinte fórmula:
    <br><br>
    valorTotalDaConta / numeroPrestacoes = valorPorPrestacao
    <br><br>
    <strong>E.g.: 1500 / 10 = R$ 150,00</strong> será o <br>
    valor pago <strong>por</strong> prestação à pagar
    <br><br>
    Caso a opção esteja desmarcada, o cálculo será feito da seguinte forma:
    <br><br>
    valorTotalDaConta * numeroPrestacoes = valorPorPrestacao
    <br><br>
    <strong>E.g.: 1500 * 10 = R$ 15.000,00</strong> será o <br>
    valor total à ser pago <strong>após as dez prestações</strong>
  `
}

export default { divideBillValue }
