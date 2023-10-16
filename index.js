import fs from "fs"
import chalk from "chalk";

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks (texto) {
    const regex = /\[([^[\]]*?])\((https?:\/\/[^\s?#.].[^\s,]*)\)/gm
    const capturados = [...texto.matchAll(regex)].map(capturado => ({ // O matchAll retorna um iterador com todos os resultados da correspôndencia
       [ capturado[1]] : [capturado[2]]
    }))
    console.log(capturados)
}

extraiLinks(textoTeste)


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
 
