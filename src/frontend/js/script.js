/*Bloco responsável por abrir e fechar o menu lateral em dispositivos mobile */
//A ideia basica por tras desse botão é: ao clicar no elemento, dispara o evento de click,
//o evento chama a função controlarMenu(), que adiciona ou remove a classe open e closed, alterando assim,
//a imagem do botão e o estado do menu.
const btMenu = document.getElementById("bt-menu");
const menu = document.getElementById("menu-lateral")
function controlarMenu() {
    if (btMenu.classList.contains("closed")) {
        btMenu.classList.remove("closed");
        menu.classList.add("open");

        btMenu.innerHTML = `<i class="fas fa-times"></i>`
    }
    else {
        btMenu.classList.add("closed");
        menu.classList.remove("open");
        btMenu.innerHTML = `<i class="fas fa-bars"></i>`
    }
}
btMenu.addEventListener('click', () => controlarMenu());
/*--------------------------------------------------------------------*/

/*Modelagem do arquivo json que servirá como banco de dados */
//futuramente esse bloco será removido daqui pois será recebido via servidor.
const userJson = {
    "user":
    {
        "id": 1,
        "nome": "Kléber Melo Jr.",
        "email": "klbermelojr._Silva34@live.com",
        "senha": "123456",
        "nascimento": "1989-05-09T13:48:55.064Z",
        "img": "https://cdn.fakercloud.com/avatars/mekal_128.jpg",
        "pets": [{
            "id": 1,
            "nome": "chico",
            "especie": "felino",
            "raca": "sem raça definida",
            "sexo": "macho",
            "nascimento": "1989-05-09T13:48:55.064Z",
            "img": "https://cdn.fakercloud.com/avatars/mekal_128.jpg",
            "medicamentos": [{
                "id": 1,
                "descricao": "antibiotica pos castracao",
                "medicamento": "amoxilina",
                "dosagem": "500mg/ 2 comprimidos ao dia por 7 dias",
                "aplicacao": "1989-05-09T13:48:55.064Z",
                "reaplicacao": "1989-05-09T13:48:55.064Z"
            },
            {
                "id": 2,
                "descricao": "antibiotica pos castracao",
                "medicamento": "maxicam",
                "dosagem": "100mg/ 1 comprimidos ao dia por 5 dias",
                "aplicacao": "1989-05-09T13:48:55.064Z",
                "reaplicacao": "1989-05-09T13:48:55.064Z"
            }],
            "pesos": [{
                "id": 1,
                "descricao": "visita no veterinario",
                "observacao": "peso ok",
                "valor": "2,54kg",
                "data": "1989-05-09T13:48:55.064Z"
            },
            {
                "id": 2,
                "descricao": "em casa",
                "observacao": "acima do peso",
                "valor": "5,54kg",
                "data": "1989-05-09T13:48:55.064Z"
            }]
        },
        {
            "id": 2,
            "nome": "chico",
            "especie": "felino",
            "raca": "sem raça definida",
            "sexo": "macho",
            "nascimento": "1989-05-09T13:48:55.064Z",
            "img": "https://cdn.fakercloud.com/avatars/mekal_128.jpg",
            "medicamentos": [{
                "id": 1,
                "descricao": "antibiotica pos castracao",
                "medicamento": "amoxilina",
                "dosagem": "500mg/ 2 comprimidos ao dia por 7 dias",
                "aplicacao": "1989-05-09T13:48:55.064Z",
                "reaplicacao": "1989-05-09T13:48:55.064Z"
            },
            {
                "id": 2,
                "descricao": "antibiotica pos castracao",
                "medicamento": "maxicam",
                "dosagem": "100mg/ 1 comprimidos ao dia por 5 dias",
                "aplicacao": "1989-05-09T13:48:55.064Z",
                "reaplicacao": "1989-05-09T13:48:55.064Z"
            }],
            "pesos": [{
                "id": 1,
                "descricao": "visita no veterinario",
                "observacao": "peso ok",
                "valor": "2,54kg",
                "data": "1989-05-09T13:48:55.064Z"
            },
            {
                "id": 2,
                "descricao": "em casa",
                "observacao": "acima do peso",
                "valor": "5,54kg",
                "data": "1989-05-09T13:48:55.064Z"
            }]
        }
        ]

    }
}
/*--------------------------------------------------------------------*/

/*Função responsavel por carregar o menu lateral com os dados do usuario logado*/
/*A ideia aqui é que quando o login seja realizado, o servidor vai retornar um arquivo JSON como o modelado acima, 
a partir dele iremos carregar as informações na pagina. No caso desse bloco de função, irá realizar o carregamento
da imagem e nome de usuario no menu lateral.*/
function carregarMenuLateral() {
    const avatar = document.getElementById("avatar");
    const nomeUsuario = document.getElementById("nome-usuario");
    avatar.setAttribute("src", userJson.user.img);
    nomeUsuario.innerHTML += userJson.user.nome;
}
carregarMenuLateral();
/*--------------------------------------------------------------------*/

/*Função responsavel por carregar os cards dos pets de acordo com o JSON recebido do servidor*/
/*Seguindo o mesmo principio da funçao carregarMenuLateral(), teremos a funçao abaixo responsável por
realizar o carregamento dos cards dos pets de acordo com os dados recebidos no arquivo JSON*/
function carregarCards() {
    //constante responsavel por pegar a quantidade de pets, ela le o tamanho do vetor pets no "objeto" user do JSON
    const qtdPets = userJson.user.pets.length;
    //constante que seleciona o elemento html que iremos adicionar os cards.
    const painel = document.getElementById("painel");
    //laço de repetiçao para adicionar os cards
    for (i = 0; i < qtdPets; i++) {
        //aqui devemos trabalhar com o += pois se usarmos o = a cada laço será substituido o card anterior, usando 
        //o += ele irá adicionar.
        painel.innerHTML +=

            //dentro de dois acentos circunflexos `` criamos o que chamamos de template string, nele adicionamos a estrutura
            //HTML que queremos que seja adicionado. A vantagem é que conseguimos concatenar variaveis JS no meio da string.
            //Abaixo usamos o ${} para adicionar as variaveis, a imagem e nome do pet que estão no arquivo JSON.
            `<article class="card-pet">
            <div class="wrp-img">
                <img src="${userJson.user.pets[i].img}" alt="">
            </div>
            <div class="infos-pet">
                <h3>${userJson.user.pets[i].nome}</h3>
                <h4>Felino, 2 anos</h4>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, obcaecati.</h5>
            </div>
            <div class="acoes">
                <button>Cuidar</button>
                <button>Editar</button>
            </div>
        </article>
        `
    }
    if (qtdPets < 5) {
        painel.innerHTML +=
            `<article class="card-add">
                <div class="wrp">
                    <div class="circle">
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </article>`
    }

}
carregarCards();
/*--------------------------------------------------------------------*/