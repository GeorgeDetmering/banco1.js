// Definindo o objeto Banco
const Banco = {
  conta: "123456",
  saldo: 1000, // Saldo inicial
  tipoConta: "Conta Corrente",
  agencia: "7890",

  // Método para buscar o saldo
  buscarSaldo: function () {
    return this.saldo;
  },

  // Método para realizar um depósito
  deposito: function (valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
    } else {
      return "O valor do depósito deve ser maior que zero.";
    }
  },

  // Método para realizar um saque
  saque: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
    } else if (valor <= 0) {
      return "O valor do saque deve ser maior que zero.";
    } else {
      return "Saldo insuficiente para realizar o saque.";
    }
  },

  // Método para retornar o número da conta
  numeroDaConta: function () {
    return this.conta
  }