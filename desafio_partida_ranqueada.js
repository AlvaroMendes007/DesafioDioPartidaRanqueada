const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivelRanqueadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    switch(true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }

    return { saldoVitorias, nivel };
}

function continuarPrograma() {
    rl.question('Deseja continuar no programa? (sim/não): ', (resposta) => {
        if (resposta.toLowerCase() === 'sim') {
            obterVitoriasDerrotas();
        } else if (resposta.toLowerCase() === 'não') {
            console.log('Encerrando o programa.');
            rl.close();
        } else {
            console.log('Opção inválida. Por favor, responda com "sim" ou "não".');
            continuarPrograma();
        }
    });
}

function obterVitoriasDerrotas() {
    rl.question('Digite o número de vitórias: ', (vitorias) => {
        rl.question('Digite o número de derrotas: ', (derrotas) => {
            const resultado = calcularNivelRanqueadas(parseInt(vitorias), parseInt(derrotas));
            console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
            continuarPrograma();
        });
    });
}

console.log('Bem-vindo à calculadora de partidas ranqueadas!');

obterVitoriasDerrotas();
