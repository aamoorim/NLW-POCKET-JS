// arrays e objetos
let meta = {
    value: 'Ler um livro por mês',
    address: 2,
    checked: true,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "Não é mais ler um livro"
meta.log(meta.value)

// function // arrow function
// const criarMeta = () => {}

// function criarMeta() {}