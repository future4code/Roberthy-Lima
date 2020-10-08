

function addArticle() {

        let title = document.getElementById("titulo-post")
        let author = document.getElementById("autor-post")
        let content = document.getElementById("conteudo-post")
        let img = document.getElementById("imagem")
        let posts = document.getElementById("container-de-posts")


        posts.innerHTML += `<div class="posts">
        <h3> 
                ${title.value}
        </h3>
        <p class="author"> Text feito por: ${author.value}</p>
        <p class="content"> ${content.value} </p>
        <img class="imagem" src=${img.value}>
        </div>`

        title.value = ""
        author.value = ""
        content.value = ""
        
}



// let info = {
//         titulo: title,
//         autor: author,
//         conteudo: content
// }