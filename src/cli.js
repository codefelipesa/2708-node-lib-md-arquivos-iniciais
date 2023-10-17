import chalk from "chalk"
import fs from "fs"
import pegaArquivo from "./index.js"

const caminho = process.argv


async function processaTexto(argumento){
    const caminho = argumento[2]
    
    if(fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(argumento[2])
        console.log(resultados)
    } else 

    if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho)
    arquivos.forEach(async (nomeDeArquivo) => { // Especificamos que o forEach é Async
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
      console.log(lista, nomeDeArquivo)})

    
}
}
processaTexto(caminho)
