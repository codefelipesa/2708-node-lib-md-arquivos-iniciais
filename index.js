import fs from "fs"
import chalk from "chalk";

// async function findArchive (diretorioDoArquivo) {
//     const encoding = 'utf-8'
//     fs.promises.readFile(diretorioDoArquivo,encoding).then((texto)=> console.log(chalk.green(texto))).catch(trataErro)}

async function pegaArquivo(diretorioDoArquivo){
    try{
    const encoding = 'utf-8'
    const texto = await fs.promises.readFile(diretorioDoArquivo,encoding)
    console.log(texto)
} catch(erro){
    trataErro(erro)
}}

function trataErro(erro){
     console.log(chalk.red(erro))
     throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório')) // Lançando a instância do erro
 }
 
     pegaArquivo('./arquivos/texto.md')
