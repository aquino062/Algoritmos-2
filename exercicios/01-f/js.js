let menu;
let cinema = [];

// Inicializa o array 'cinema' com 10 linhas e 10 colunas, e preenche cada posição com o valor 'o'
for (let i = 0; i < 10; i++) {
  cinema[i] = [];
  for (let j = 0; j < 10; j++) {
    cinema[i][j] = 'o'; // ou qualquer outro valor inicial que você desejar
  }
}

// Loop que exibe um menu para o usuário e espera sua escolha
do {
  menu = prompt('Escolha uma opção:\n1 - Reservar\n2 - Layout do cinema\n3 - Sair');

  // Caso o usuário escolha a opção 1 - Reservar
  if (menu === '1') {
    let fila = parseInt(prompt('Fila: ')); // Pede para o usuário informar o número da fila
    let poltrona = parseInt(prompt('Poltrona: ')); // Pede para o usuário informar o número da poltrona

    // Verifica se a poltrona selecionada está disponível
    if (cinema[fila][poltrona] === 'o') {
      cinema[fila][poltrona] = 'x'; // Se estiver disponível, marca a poltrona como ocupada
      console.log('Poltrona reservada!');
    } else {
      console.log('Poltrona já ocupada!'); // Se não estiver disponível, exibe uma mensagem de erro
    }
  } else if (menu === '2') {
    console.log(cinema); // Exibe o array 'cinema' no console
    // Loop que percorre o array 'cinema' e exibe cada posição no formato de uma matriz
    for (let i = 0; i < 10; i++) {
      let linha = '';
      for (let j = 0; j < 10; j++) {
        linha += cinema[i][j] + ' ';
      }
      console.log(linha);
    }
  }
} while (menu !== '3');

console.log(cinema); // Exibe o array 'cinema' final no console
