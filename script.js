let listaLinks = document.getElementsByClassName('link-menu')

//aqui armazenamos em variaveis os links para posteriomente adicionarmos "escutadores"
let linkSobreMim = document.getElementById('sobre-mim')
let linkFormacao = document.getElementById('formacao')
let linkProjeto = document.getElementById('projetos')
let linkContato = document.getElementById('contato')
let containerPrincipal = document.getElementById('container')

//aqui armazenamos em variaveis o conteudo que sera mostrado em cada link
let conteudoSobreMim = `<div class="container-sobremim-principal">
            <h1 class="titulo-principal">Sobre mim</h1>
            <div class="container-sobremim">
                <p class="paragrafo-principal">Olá! Meu nome é Gabrielly e sou apaixonada por tecnologia, aprendizado constante e por transformar ideias em soluções reais. Atualmente, estou me dedicando ao desenvolvimento web, focando em criar interfaces intuitivas e funcionais que ofereçam uma boa experiência para o usuário.
                Minha trajetória profissional começou fora da área de tecnologia, mas foi justamente essa bagagem diversa que me trouxe uma visão mais humana e comunicativa para os projetos que desenvolvo. Tenho buscado evoluir constantemente, estudando linguagens como HTML, CSS, JavaScript e também explorando o back-end com Node.js e bancos de dados como MongoDB.
                Neste portfólio, você vai encontrar alguns dos projetos que desenvolvi como parte dos meus estudos e também projetos pessoais, nos quais pude colocar em prática minhas habilidades técnicas, criatividade e vontade de aprender. Estou sempre aberta a novos desafios e oportunidades que me permitam crescer e contribuir com soluções de valor.
                Fique à vontade para explorar meus trabalhos e, se quiser bater um papo ou colaborar, será um prazer falar com você!</p>
                <img class="img-sobremim" src="img/girl-158465_640.png" alt="">
            </div>
        </div>`
let conteudoFormacao = `<div class="container-formacao-principal">
            <h1 class="titulo-principal">Formação</h1>
            <h2 class="subtitulo">Formação academica</h2>
            <ul class="lista">
                <li class="item-lista">Uninter</li>
                <ul class="sublista">
                    <li class="item-lista subitem">Analise e desenvolvimento de sistemas (cursando)</li>
                </ul>
                <li class="item-lista">Alura</li>
                <ul class="sublista">
                    <li class="item-lista subitem">Formação: HTML e CSS para projetos web</li>
                    <li class="item-lista subitem">Formação: Desenvolva aplicaçoes Web com JavaScript</li>
                    <li class="item-lista subitem">Formação: APISs com Node.js e Express</li>
                    <li class="item-lista subitem">Formação: Desenvolva aplicações Web em JavaScript com tarefas concorrentes e orientadas a objetos</li>
                </ul>
            </ul>
            <h2 class="subtitulo">Idiomas</h2>
            <ul class="lista">
                <li class="item-lista">Portugues</li>
                <li class="item-lista">Ingles - Intermediario</li>
            </ul>
            <div class="certificados">
                <img src="img/formacao-html-css.png" alt="">
                <img src="img/formacao-js-poo.png" alt="">
                <img src="img/formacao-js.png" alt="">
                <img src="img/formacao-python.png" alt="">
                <img src="img/curso-node.png" alt="">
                <img src="img/curso-node2.png" alt="">
            </div>

        </div>`
let conteudoProjeto = `<div class="container-projetos-principal">
            <h1 class="titulo-principal">Projetos</h1>
            <div class="container-projeto">
                <div class="container-imagem-projeto">
                    <img src="img/projeto1-aluradev.png" alt="">
                    <img src="img/projeto1-aluradev2.png" alt="">
                </div>
                <p class="descricao-projeto">Projeto de editor de codigos desenvolvido a partir do Challange Alura. Possui pagina principal onde é possivel escrever o codigo, titulo, descrição e alterar a cor da borda e uma segunda pagina chamada comunidade, onde é possivel ver os codigos salvos. Utiliza HTML, CSS e JavaScript como tecnologia.</p>
            </div>
            <div class="container-projeto">
                <div class="container-imagem-projeto">
                    <img src="img/projeto2-adota.png" alt="">
                    <img src="img/projeto2-adota2.png" alt="">
                </div>
                <p class="descricao-projeto">Projeto de site de adoção desenvolvido a partir do Challange Alura. Contem uma pagina de cadastro, pagina principal com os animais disponiveis e pagina de perfil onde é possivel editar a imagem, solicitar cadastro de animal e sair da aplicação. Utiliza HTML, CSS e JavaScript como tecnologia.</p>
            </div>
            <div class="container-projeto">
                <div class="container-imagem-projeto">
                    <img src="img/projeto3-alurabook.png" alt="">
                    <img src="img/projeto3-alurabook2.png" alt="">
                </div>
                <p class="descricao-projeto">Projeto desenvolvido durante o curso HTML e CSS da alura. É uma pagina estatica para praticar semantica e estilos. Utiliza HTML e CSS como tecnologia.</p>
            </div>
        </div>`
let conteudoContato = `<div class="container-contato-principal">
            <h1 class="titulo-principal">Contato</h1>
            <div class="container-contato">
                <div>
                    <ul class="lista">
                        <li class="item-lista">Email: gabymonteiro197@gmail.com</li>
                        <li class="item-lista">GitHub: gabriellysouz</li>
                        <li class="item-lista">Telefone: (15) 99999-9999</li>
                    </ul>
                    <form class="form-contato">
                        <h2 class="subtitulo-contato">Ou faça um pedido de contato!</h2>
                        <label for="nome" class="titulo-form">Nome</label>
                        <input type="text" name="nome"  class="input-contato">
                        
                        <label for="email" class="titulo-form">Email</label>
                        <input type="text" name="email" class="input-contato">

                        <label for="descricao" class="titulo-form">Pedido de contato</label>
                        <textarea name="descricao" id="" maxlength="100" class="texto-descricao"></textarea>

                        <input class="botao-contato" type="submit" value="Enviar pedido de contato">
                    </form>
                </div>
                <div>
                    <img src="img/icon-3154242_640.png" class="img-contato" alt="">
                </div>
            </div>
        </div>`

//ao carregar a pagina ja chamamos a funçao que mostra o primeiro conteudo
trocarPagina(linkSobreMim, conteudoSobreMim)

//adicionamos "escutadores" aos links para que troque o conteudo assim que clicado
linkSobreMim.addEventListener('click', () => {
    trocarPagina(linkSobreMim, conteudoSobreMim)
})
linkFormacao.addEventListener('click', () => {
    trocarPagina(linkFormacao, conteudoFormacao)
})
linkProjeto.addEventListener('click', () => {
    trocarPagina(linkProjeto, conteudoProjeto)
})
linkContato.addEventListener('click', () => {
    trocarPagina(linkContato, conteudoContato)
})

//essa função é a junção do alterar o link clicado visualmente e alterar o conteudo apresrntado 
function trocarPagina(elemento, conteudo){
    alterarClicado(elemento)
    containerPrincipal.innerHTML = conteudo
}

//nessa função removemos a classe "clicado" ja estilizado em css e alteramos para o novo elemento, deixando visual o link que foi clicado
function alterarClicado(elemento){
    for(let link of listaLinks){
        link.classList.remove("clicado")
    }
    elemento.classList.add("clicado")
}
