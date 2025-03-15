"use strict";
var empresa;
(function (empresa) {
    class Cliente extends empresa.Pessoa {
        constructor(codigo) {
            super();
            this._codigo = codigo;
        }
        get codigo() {
            return this._codigo;
        }
        set codigo(codigo) {
            this._codigo = codigo;
        }
        get saldo() {
            return this._saldo;
        }
        set saldo(saldo) {
            this._saldo = saldo;
        }
    }
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
