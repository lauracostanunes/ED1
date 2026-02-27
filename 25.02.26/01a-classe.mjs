class FormaGeometrica {
    #base // # = privar -> encapsulou -> só acessa com get ou set
    #altura
    #tipo

    get base() {
        return this.#base // -> this substitui qualquer objeto lá fora
    }
    get altura() {
        return this.#altura
    }
    get tipo() {
        return this.#tipo
    }
    set base(valor) {
        if (typeof valor == ! 'number' || valor <= 0) {
            throw new Error("Erro: A base precisa ser numérica e maior que zero.")
        }
        this.#base = valor
    }
    set altura(valor) {
        if (typeof valor == ! 'number' || valor <= 0) {
            throw new Error("Erro: A altura precisa ser numérica e maior que zero.")
        }
        this.#altura = valor
    }
    set tipo(valor) {
        if (!["R", "T", "E"].includes(valor.toUpperCase())) {
            throw new Error("Erro: O tipo precisa ser um dos valores: R, T ou E.")
        }
        this.#tipo = valor.toUpperCase()
    }
    calcularArea() {
        switch (this.#tipo) {
            case "R":
                return this.#base * this.#altura
            case "T":
                return this.#base * this.altura / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }
}

let forma1 = new FormaGeometrica()
forma1.base = 7
forma1.altura = 22.5
forma1.tipo = "R"
console.log("Área da forma1 é", forma1.calcularArea())