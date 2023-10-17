import chalk from "chalk"
import fs from "fs"
import pegaArquivo from "./index.js"
import validaLista from "./http-valida.js"

const caminho = process.argv

function imprimeLista(valida, resultado, nomeDeArquivo = "") {
    if(valida){
        console.log(`${chalk.yellow(" Lista de links do arquivo: ")} 
        ${chalk.bgBlue(nomeDeArquivo)} `,
        validaLista(resultado))
    }else{    
        console.log(`${chalk.yellow(" Lista de links do arquivo: ")} 
        ${chalk.bgBlue(nomeDeArquivo)} `,
        resultado)}


}

async function processaTexto(argumento){

   try{ 
    const caminho = argumento[2]
    const valida = argumento[3] === '--valida'


    if(fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(argumento[2])
        imprimeLista(valida, resultados)

    }else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => { // Especificamos que o forEach é Async
        const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
        imprimeLista(valida, lista, nomeDeArquivo)})}

    } catch(erro){

        if(erro.code == 'ENOENT'){
            console.log(chalk.red("Não há arquivos nesse diretório, por favor verifique o diretório."))
        }
        else {
            console.log(erro)
        }
    }
}
processaTexto(caminho)
