let menu;
let cinema = [];

for (let i = 0; i < 10; i++) {
  cinema[i] = [];
  for (let j = 0; j < 10; j++) {
    cinema[i][j] = 'o'; // ou qualquer outro valor inicial que você desejar
  }
}

do {
  menu = prompt('Escolha uma opção:\n1 - Reservar\n2 - Layout do cinema\n3 - Sair');

  if (menu === '1') {
    let fila = parseInt(prompt('Fila: '));
    let poltrona = parseInt(prompt('Poltrona: '));

    if (cinema[fila][poltrona] === 'o') {
      cinema[fila][poltrona] = 'x';
      console.log('Poltrona reservada!');
    } else {
      console.log('Poltrona já ocupada!');
    }
  } else if (menu === '2') {
    for (let i = 0; i < 10; i++) {
      let linha = '';
      for (let j = 0; j < 10; j++) {
        linha += cinema[i][j] + ' ';
      }
      console.log(linha);
    }
  }
} while (menu !== '3');

console.log(cinema);
