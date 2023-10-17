

function extraiLinks(arrLinks){
   return arrLinks.map((ObjLink) => Object.values(ObjLink).join());
}

 async function checaLinks(listaDeURLs){
    const arrStatus = await Promise.all(listaDeURLs.map(async(url) => {
        const response = await fetch(url)
        return response.status
    }))
    return arrStatus
}

export default  async function validaLista(listaDeLinks){
    const linksExtraidos = extraiLinks(listaDeLinks)
    const status = await checaLinks(linksExtraidos)
    console.log(status)
    return status
}



//[gatinho salsicha](http://gatinhosalsicha.com.br/)
// [Teste de retorno 400](https://httpstat.us/404).

