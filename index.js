let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

let metas = [
    meta,
    {
        value: "Caminhar 20 minutos todos os dias",
        checked: false
    }
] 

// mostra "ler um livro por mês"
console.log(metas[0].value)
// e o console.log(metas[1].value) mostra "Caminhar 20 minutos todos os dias"