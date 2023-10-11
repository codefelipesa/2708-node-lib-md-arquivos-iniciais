import fs from "fs"
import chalk from "chalk";

function getArchive (diretorioDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(diretorioDoArquivo, encoding, (_, texto) => {
        console.log(chalk.bgBlue(texto))
    } )
}

getArchive('./arquivos/texto.md')