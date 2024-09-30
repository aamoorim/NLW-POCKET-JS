const { select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0){
        console.log('A meta não pode ser vazia.')
        return
    }

    metas.push(
        { value: meta, checked: false}
    )

}

const listarMetas = async () => {
    const respostas = await checkbox({
        message:"Use as setas para mudar de meta, o espaço para marcar ou desmacar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta 
       })

         meta.checked = true
    })

    console.log('Meta(s) marcada(s) concluída(s)')
    
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log('Não existem metas realizadas! :(')
        return
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas]
    })
}

const start = async () => {
        
    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                
                {
                    name: "Listar meta",
                    value: "Listar"
                },

                {
                    name: "Metas Realizadas",
                    value: "Realizadas"
                },

                {
                    name: "Sair",
                    value: "Sair"
                },
            ]
        })

        switch(opcao){
            case "Cadastrar": 
                await cadastrarMeta()
                console.log(metas)
                break
            case "Listar":
                await listarMetas()
                break
            case "Realizadas":
                await metasRealizadas()
                break
            case "Sair":
                console.log("Até a próxima!")
                return
            }
    }
}
start()