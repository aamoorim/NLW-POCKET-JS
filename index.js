// parei no minuto 16:30 da segunda aula

const { select } = require('@inquirer/prompts')

const start = async ()=>{
        
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
                    name: "Sair",
                    value: "Sair"
                },
            ]
        })

        switch(opcao){
             case "Cadastrar": 
                console.log("Vamos Cadastrar")
                break
            case "Listar":
                console.log("Vamos listar")
                break
             case "Sair":
                console.log("Até a próxima!")
                return
            }
    }
}
start()