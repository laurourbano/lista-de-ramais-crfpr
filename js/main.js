const add = () => {

    const novoContato = prompt('Insira novo usuário:')
    const ramal = prompt('Digite o ramal do usuário:')

    const divNova = document.createElement("p");
    const conteudoNovo = document.createTextNode(`${novoContato} ${ramal}`);

    divNova.appendChild(conteudoNovo);

    const divAtual = document.getElementsByClassName(".contato");
    document.body.insertBefore(divNova, divAtual);

};

/*<p>Lauro Otávio Urbano - <span>9607</span>
    <button class="input trash" onclick="trash()">
        <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    <button class="input edit" onclick="edit()">
        <i class="fa fa-pencil-square" aria-hidden="true"></i>
    </button>
</p>*/

const edit = () => {

    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("EDIT");

    divNova.appendChild(conteudoNovo);

    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);

};

const trash = () => {
    const trash = document.querySelector('.trash');

    trash.addEventListener('click', () => {

        let desejaExcluir = prompt('deseja excluir? (s para sim ou n para não)');
        const excluindo = document.querySelector('.contato');

        if (desejaExcluir == 's') {
            var divNova = document.createElement("div");
            var conteudoNovo = document.createTextNode("sim");

            divNova.appendChild(conteudoNovo);

            var divAtual = document.getElementById("div1");
            document.body.insertBefore(divNova, divAtual);
        }
        else if (desejaExcluir == 'n') {
            var divNova = document.createElement("div");
            var conteudoNovo = document.createTextNode("não");

            divNova.appendChild(conteudoNovo);

            var divAtual = document.getElementById("div1");
            document.body.insertBefore(divNova, divAtual);
        }
        else {
            desejaExcluir()
        }
    });
};
