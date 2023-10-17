import chalk from "chalk"
import fs from "fs"
import pegaArquivo from "./index.js"

const caminho = process.argv

function imprimeLista(nomeDeArquivo, resultado) {
    console.log(`${chalk.bgBlue(" Lista de links do arquivo: ")} ${chalk.yellow(nomeDeArquivo)} `,resultado)
}

async function processaTexto(argumento){

   try{ const caminho = argumento[2]
    if(fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(argumento[2])
        imprimeLista(resultados)
    }else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => { // Especificamos que o forEach é Async
        const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
        imprimeLista(nomeDeArquivo, lista)})}
    } catch(erro){
        if(erro.code == 'ENOENT'){
            console.log(chalk.red("Não há arquivos nesse diretório, por favor verifique o diretório."))
        }else {
            console.log(erro)
        }
    }
}
processaTexto(caminho)
