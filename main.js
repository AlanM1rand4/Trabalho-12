let heroi = {
    nome: 'Alanzin',
    vida: 100,
    forca: 20,
    recursos: 50,
};

let rodadaAtual = 1;
let maxRodadas = 5;

function start() {
    console.log(`Bem-vindo à aventura de ${heroi.nome}!`);
    console.log(`Vida: ${heroi.vida}, Força: ${heroi.forca}, Recursos: ${heroi.recursos}`);
    rodadaAtual = 1; 
    mostrarRodada();
}

function mostrarRodada() {
    console.log(`\n--- Rodada ${rodadaAtual} ---`);

    let desafio = Math.floor(Math.random() * 3);

    switch (desafio) {
        case 0: 
            console.log("Você encontrou um inimigo feroz!");
            heroi.vida -= 10;
            heroi.forca -= 5;
            break;
        case 1: 
            console.log("Você encontrou um baú de tesouro!");
            heroi.recursos += 30;
            break;
        case 2: 
            console.log("Você encontrou uma poção de cura!");
            heroi.vida += 20;
            break;
        default:
            console.log("Algo inesperado aconteceu...");
            break;
    }

    console.log(`Vida: ${heroi.vida}, Força: ${heroi.forca}, Recursos: ${heroi.recursos}`);

    if (heroi.vida <= 0) {
        console.log("Game Over! Você foi derrotado...");
    } else if (rodadaAtual < maxRodadas) {
        console.log(`Digite "proxima()" para continuar para a próxima rodada.`);
    } else {
        console.log("Parabéns, você completou a aventura!");
        console.log('Digite "start()" para começar de novo.');
    }
}

function proxima() {
    if (heroi.vida > 0 && rodadaAtual < maxRodadas) {
        rodadaAtual++;
        mostrarRodada();
    } else if (heroi.vida <= 0) {
        console.log("Você está derrotado e não pode continuar! Digite 'start()' para reiniciar.");
    } else {
        console.log('A aventura terminou. Digite "start()" para jogar novamente.');
    }
}
