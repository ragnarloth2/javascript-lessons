const seq = {
    _valor = 1,
    get valor() {return this._valor++},
    set valor(valor) {this._valor = valor}
}