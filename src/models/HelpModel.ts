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

export default { divideBillValue }
