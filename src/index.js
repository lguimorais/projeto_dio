const mario = {
  nome: "mario",
  velocidade: 4,
  manobrabilidade: 3,
  força: 3,
};
const bowser = {
  nome: "bowser",
  velocidade: 5,
  manobrabilidade: 2,
  força: 5,
};
const luigi = {
  nome: "luigi",
  velocidade: 5,
  manobrabilidade: 2,
  força: 5,
};
const donkeyKong = {
  nome: "donkey-kong",
  velocidade: 5,
  manobrabilidade: 2,
  força: 5,
};
const Yoshi = {
  nome: "yoshi",
  velocidade: 5,
  manobrabilidade: 2,
  força: 5,
};

function pistasAleatorias() {
  const pistas = ["reta", "curva", "confronto"];
  const pista = pistas[Math.floor(Math.random() * pistas.length)];
  return pista;
}
function rolarDado() {
  const dado = Math.floor(Math.random() * 6) + 1;
  return dado
}
function iniciar(personagem1, personagem2) {
  for (let i = 0; i < 10; i++) {
    palavraEscolhida = pistasaleatorias();
    console.log("pista sorteada:", palavraEscolhida);
    if (palavraEscolhida == "reta") {
      const dadopersonagem1 = rolarDado();
      console.log("O jogador-1 girou o dado e tirou:", dadopersonagem1);
      const resultadoJ1 = personagem1.velocidade + dadopersonagem1;
      console.log(
        "o " + personagem1.nome + " ficou com:" + resultadoJ1 + " de velocidade"
      );
      const dadopersonagem2 = rolarDado();
      console.log("jogador-2 girou o dado e tirou:", dadopersonagem2);
      const resultadoJ2 = personagem2.velocidade + dadopersonagem2;
      console.log(
        "o " +
          personagem2.nome +
          " ficou com:" +
          resultadoJ2 +
          " de velocidade "
      );
      if (resultadoJ1 > resultadoJ2) {
        console.log(personagem1.nome, " foi o vencedor");
      } else if (resultadoJ1 < resultadoJ2) {
        console.log(personagem2.nome, " foi o vencedor");
      } else {
        console.log("Empate");
      }
    }
  }
}
iniciar(Yoshi, mario);
