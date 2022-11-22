const card_jogadores = (jogadores_card) => {
    let jogador = jogadores_card.map(function (jog){
        return `
        <div class='card'>
            <a href="./perfil.html">
                <button class="jogador" onclick="add_cookie(${jog.ID})" >
                    <div class="foto">
                        <img src = "${jog.imagem}" class="imagem"></img>
                    </div>
                    <h2 class="nome">${jog.nome}</h2>
                    <p class="posicao">${jog.posicao}</p>
                </button>
            </a>
        </div>
        `;
    }).join('');
    document.querySelector("#container").innerHTML = jogador;
}

const add_cookie = (index) => {
    document.cookie = "jogador="+index;
    location.reload();
}

const pesquisar = () => {
    const pesquisa_text = document.querySelector('#pesquisa_text').value;

    const jogadoresFiltrados = jogadores.filter((jog) =>
            jog.nome.toLowerCase().includes(pesquisa_text) ||
            jog.posicao.toLowerCase().includes(pesquisa_text)
    );
    card_jogadores(jogadoresFiltrados);

}

window.onload = () => {
    card_jogadores(jogadores)
};