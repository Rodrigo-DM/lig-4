//Declaração de variáveis globais
const container = document.querySelector('.container');
const main = document.getElementsByTagName('main')[0];
const castelo = document.getElementsByClassName('castelo')[0];
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const vencedorBox = document.getElementById('currentPlayer');
const players = document.getElementsByClassName('players')[0];
const resultado = document.getElementById('resultado');
const vencedor = document.getElementsByClassName('vitoria')[0];
const btnReset = document.getElementById('reset');
const btnStart = document.getElementById('start');
const btnMute = document.getElementById('mute');
const soundControl = document.getElementById('sound-control');
const volumeControl = document.getElementById('volume-control');
const sfx = document.getElementById('sfx');
const victoryTheme = document.getElementById('victoryTheme');
const backgroundMusic = document.getElementById('soundtrack');

let modoMusica = true;
let turno = 1;
let tabuleiro = [[], [], [], [], [], [], []];

//checar volume
setInterval(function () {
    backgroundMusic.volume = volumeControl.value / 100;
    victoryTheme.volume = volumeControl.value / 100;
    sfx.volume = volumeControl.value / 300;
}, 500);



// Criação de colunas e quadrados 
for (let i = 0; i < 7; i++) {
    const coluna = document.createElement('div');
    coluna.classList.add('colunas');
    container.appendChild(coluna);
}

const colunas = document.querySelectorAll('.colunas');
colunas.forEach(coluna => {
    for (let i = 0; i < 6; i++) {
        const quadrado = document.createElement('div');
        quadrado.classList.add('quadrados');
        coluna.appendChild(quadrado);
    }
})

// criação de discos
const criarDisco = () => {
    const disco = document.createElement('div');
    disco.classList.add('disco');

    if (turno === 1) {
        disco.classList.add('sunSE');
        disco.dataset.cor = 'preto';

    } else if (turno === 2) {
        disco.classList.add('moonSE');
        disco.dataset.cor = 'vermelho';
    }

    return disco;
}

//Verificação jogador da vez
const currentPlayer = () => {
    if (turno === 1) {
        player1.classList.add('playerturn');
        player2.classList.remove('playerturn');
    } else if (turno === 2) {
        player1.classList.remove('playerturn');
        player2.classList.add('playerturn');
    }
}

//Função de Verificação de Vitória

//Botão de iniciar
btnStart.addEventListener('click', () => {
    btnStart.classList.add('hidden');
    main.classList.remove('hidden');
    btnMute.classList.remove('hidden');
    soundControl.classList.remove('hidden');
    backgroundMusic.play();

    currentPlayer();
})

//Mutar fundo musical
btnMute.addEventListener('click', () => {
    if (modoMusica === true) {
        backgroundMusic.muted = true;
        victoryTheme.muted = true;
        sfx.muted = true;
        modoMusica = false;
        btnMute.src = "./assets/images/mute.png";
    } else if (modoMusica === false) {
        backgroundMusic.muted = false;
        victoryTheme.muted = false;
        sfx.muted = false;
        modoMusica = true;
        btnMute.src = "./assets/images/volume.png";
    }


})

//Atualizar array de verificação
const verificarTabuleiro = () => {
    let newArray = [[], [], [], [], [], [], []];

    for (let i = 0; i < colunas.length; i++) {
        let quadrados = colunas[i].querySelectorAll('.quadrados');

        for (j = 0; j < quadrados.length; j++) {
            let discoPosicao = quadrados[j].firstElementChild;

            if (discoPosicao === null) {
                break;
            }

            if (discoPosicao.dataset.cor === 'preto') {
                newArray[i].push(1);
            }

            if (discoPosicao.dataset.cor === 'vermelho') {
                newArray[i].push(2);
            }
        }
    }

    tabuleiro = newArray;
}

//Verificações de resultado

//Verificação Horizontal
const verificarHorizontal = () => {
    for (let j = 0; j < 6; j++) {
        for (let i = 0; i < 4; i++) {
            let discoA = tabuleiro[i][j];
            let discoB = tabuleiro[i + 1][j];
            let discoC = tabuleiro[i + 2][j];
            let discoD = tabuleiro[i + 3][j];

            if (discoA === discoB && discoB === discoC && discoC === discoD) {
                if (discoA === 1) {
                    return 'preto';

                } else if (discoA === 2) {
                    return 'vermelho';
                }
            }
        }
    }

    return null;
}


//Verificação Vertical
const verificarVertical = () => {
    for (let i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i].length > 3) {
            for (let j = 0; j < 3; j++) {
                let discoA = tabuleiro[i][j];
                let discoB = tabuleiro[i][j + 1];
                let discoC = tabuleiro[i][j + 2];
                let discoD = tabuleiro[i][j + 3];

                if (discoA === discoB && discoB === discoC && discoC === discoD) {
                    if (discoA === 1) {
                        return 'preto';
                    } else if (discoA === 2) {
                        return 'vermelho';
                    }
                }
            }
        }
    }

    return null;
}

//Verificação Diagonal
const verificarDiagonal = () => {
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
            let discoA = tabuleiro[i][j];
            let discoB = tabuleiro[i + 1][j + 1];
            let discoC = tabuleiro[i + 2][j + 2];
            let discoD = tabuleiro[i + 3][j + 3];

            if (discoA === discoB && discoB === discoC && discoC === discoD) {
                if (discoA === 1) {
                    return 'preto';
                } else if (discoA === 2) {
                    return 'vermelho';
                }
            }
        }
    }

    for (let j = 0; j < 3; j++) {
        for (let i = 6; i > 2; i--) {
            let discoA = tabuleiro[i][j];
            let discoB = tabuleiro[i - 1][j + 1];
            let discoC = tabuleiro[i - 2][j + 2];
            let discoD = tabuleiro[i - 3][j + 3];

            if (discoA === discoB && discoB === discoC && discoC === discoD) {
                if (discoA === 1) {
                    return 'preto';
                } else if (discoA === 2) {
                    return 'vermelho';
                }
            }
        }
    }

    return null;
}

// verificação de empate 
const verificarEmpate = () => {
    let count = 0;

    tabuleiro.forEach(coluna => {
        if (coluna.length === 6) {
            count++;
        } else {
            return;
        }
    });

    if (count === 7) {
        return 'empate';
    }
}

//Verifica se já tem um resultado
const fimJogo = () => {
    verificarTabuleiro();

    let vencedorVertical = verificarVertical();
    let vencedorHorizontal = verificarHorizontal();
    let vencedorDiagonal = verificarDiagonal();
    let empate = verificarEmpate();

    if (vencedorVertical === null && vencedorHorizontal === null && vencedorDiagonal === null && empate === null) {
        return false;
    }

    if (vencedorVertical === 'preto' || vencedorHorizontal === 'preto' || vencedorDiagonal === 'preto') {
        alerta('vencedorSol', `<h3>No dia mais claro...</h3><h2>o Sol venceu!</h2>`, resultado);
        document.body.classList.add("dia");
        gifVencedor(vencedorBox);

        return true;
    }

    if (vencedorVertical === 'vermelho' || vencedorHorizontal === 'vermelho' || vencedorDiagonal === 'vermelho') {
        alerta('vencedorLua', `<h3>Na noite mais escura...</h3><h2>a Lua venceu!</h2>`, resultado);
        document.body.classList.add("noite");
        gifVencedor(vencedorBox);

        return true;
    }

    if (empate === 'empate') {
        alerta('empate', `<h3>Nem Sol nem Lua...</h3><br><h2>Empate!</h2>`, resultado);
        
        return true;
    }
}

//Muda para fundo musical de resultado da partida
const changeMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    victoryTheme.currentTime = 0;
    victoryTheme.play();
}

//Funções de mensagens
const alerta = (classe, texto, eltpai) => {
    const msg = document.createElement('span');
    msg.classList.add(classe);
    msg.innerHTML = texto;
    eltpai.appendChild(msg);
}

const colunaCheia = () => {
    alerta('cheio', 'Seu astro foi capturado por um buraco negro', resultado);
    setTimeout(() => { resultado.innerHTML = '' }, 1000);
}

const gifVencedor = (parent) => {
    let vencedor = criarDisco();
    parent.appendChild(vencedor);
}

//Funções de jogada
const mudaTurno = () => {
    if (turno === 1) {
        return turno = 2;
    }
    if (turno === 2) {
        return turno = 1;
    }

    currentPlayer();
}

const somJogada = () => {
    sfx.pause()
    sfx.currentTime = 0;
    sfx.play();
}

const jogada = (bloco) => {
    somJogada();

    const discoCriado = criarDisco();
    bloco.appendChild(discoCriado);

    if (fimJogo()) {
        changeMusic();
        players.classList.add("hidden");
        btnReset.classList.remove('hidden');
        castelo.classList.add('hidden');
        return;
    };

    mudaTurno();
}

const selecionarQuadrados = (quadrados) => {
    let quadradoEscolhido = quadrados[0];

    for (let i = 0; i < quadrados.length; i++) {
        if (quadrados[i].childElementCount === 0) {
            quadradoEscolhido = quadrados[i];
            break;
        }
    }

    jogada(quadradoEscolhido);
}

const verificarColuna = (coluna) => {
    let blocos = coluna.querySelectorAll('.quadrados');
    let ultimoQuadrado = blocos[blocos.length - 1];

    if (ultimoQuadrado.childElementCount > 0) {
        colunaCheia();

        return true;
    }

    selecionarQuadrados(blocos);
}

function setColuna(e) {
    const colunaEscolhida = e.currentTarget;

    verificarColuna(colunaEscolhida);
}

colunas.forEach((item) => {
    item.addEventListener('click', setColuna);
})

//Reiniciar
const reset = () => {
    victoryTheme.pause();
    victoryTheme.currentTime = 0;
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();

    document.body.classList.remove("dia", "noite");
    players.classList.remove("hidden");

    btnReset.classList.add('hidden');
    resultado.innerHTML = '';
    vencedorBox.innerHTML = '';

    turno = 1;
    tabuleiro = [[], [], [], [], [], [], []];

    const quadrados = document.querySelectorAll('.quadrados');

    quadrados.forEach(quadrado => quadrado.innerHTML = '');

    castelo.classList.remove('hidden');

    currentPlayer();
}

btnReset.addEventListener('click', reset);

