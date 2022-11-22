const perfil = () => {
    cookies = document.cookie;
    document.querySelector("#container").innerHTML += `
    <div class="card">
        <img src="${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].imagem}">
        <h2 class="nome_completo">${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].nome_completo}</h2>
        <p class="posicao">${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].posicao}</p>
        <p class="descricao">${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].descricao}</p>
        <p class="nascimento">${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].nascimento}</p>
        <p class="altura_peso">${jogadores[cookies.split(";").find((e) => e.includes("jogador")).split("=")[1]].altura_peso}</p>
    </div>
    `;
}

window.onload = () => {
    perfil()
}