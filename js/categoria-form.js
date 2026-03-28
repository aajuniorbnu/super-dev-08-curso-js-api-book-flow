const botaoSalvar = document.getElementById("btn-salvar");
botaoSalvar.addEventListener("click", salvar);
//http://127.0.0.1:5500/categoria-form.html?id=68
const urlParms = new URLSearchParams(window.location.search);
const idParaEditar = urlParms.get("id");

function salvar() {
    let campoNome = document.getElementById("input-nome");
    let nome = campoNome.value;
//payload é o corpo da requisicao(enviar para o back-end)
    let payload = {
        "nome": nome
    }
    if(idParaEditar === null){
   
    }else{
        editar(payload);
    }
function editar(){
     fetch("https://api.franciscosensaulas.com/api/v1/biblioteca/categorias", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
    })
    
        .then(() => {
            alert("Categoria cadastrada com sucesso");
        })
        .catch((erro) => {
            alert("Nao foi possivel cadastrar a categoria");
        });

}

    }

function cadastrar(payload) {
    fetch("https://api.franciscosensaulas.com/api/v1/biblioteca/categorias", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
    })
        .then((data) => {
            return data.json();
        })
        .then(() => {
            alert("Categoria cadastrada com sucesso");
        })
        .catch((erro) => {
            alert("Nao foi possivel cadastrar a categoria");
        });
}

function carregarCategoriaParaEditar(){
    fetch(`https://api.franciscosensaulas.com/api/v1/biblioteca/categorias/${idParaEditar}`)
    .then(dados => dados.json())
    .then((categoria) => {
       const campoNome = document.getElementById("input-nome");
       campoNome.value = categoria.nome;
    })
    .catch(erro => {
        alert("Ocorreu um erro ao carregar aos dados da categoria");
    })
}
if(idParaEditar !== null){
    carregarCategoriaParaEditar();
}
