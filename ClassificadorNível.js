let nomeHeroi = 'Eu';
let nivelXP = 11000;

const niveis = {
  Ferro: [0, 1000],
  Bronze: [1001, 2000],
  Prata: [2001, 5000],
  Ouro: [5001, 7000],
  Platina: [7001, 8000],
  Ascentente: [8001, 9000],
  Imortal: [9001, 10000],
  Radiante: [10001, Infinity],
};

let nivelEncontrado = ' ';
for (let nivel in niveis) {
  let [min, max] = niveis[nivel];
  if (nivelXP >= min && nivelXP <= max) {
    nivelEncontrado = nivel;
    break;
  }
}

console.log(`O Herói ${nomeHeroi} está no nível ${nivelEncontrado} XP`);
