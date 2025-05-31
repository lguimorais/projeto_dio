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

const dado = Math.floor(Math.random() * 6) + 1;
console.log(dado);
iniciar(Yoshi, mario)
function iniciar( personagem1, personagem2){
  for (let i = 0; i < 10; i++) {
    const palavras = ["reta"];
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraEscolhida = palavras[indiceAleatorio];
    console.log("pista sorteada:", palavraEscolhida);
    if (palavraEscolhida === "reta") {
      const dado1 = Math.floor(Math.random() * 6) + 1;
      console.log("O jogador-1 girou o dado e tirou:", dado1);
      const resultadoJ1 = personagem1.velocidade + dado1;
      console.log(
        "o " + personagem1.nome + " ficou com:" + resultadoJ1 + " de velocidade"
      );
      const dado2 = Math.floor(Math.random() * 6 + 1);
      console.log("jogador-2 girou o dado e tirou:", dado2);
      const resultadoJ2 = personagem2.velocidade + dado2;
      console.log(
        "o " + personagem2.nome + " ficou com:" + resultadoJ2 + " de velocidade "
      );
      if (resultadoJ1>resultadoJ2){
        console.log(personagem1.nome," foi o vencedor"); 
      }else if (resultadoJ1<resultadoJ2) {
        console.log(personagem2.nome, " foi o vencedor");
      }else{
        console.log("Empate");
        
      }
    }
  }
  
}
