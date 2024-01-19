//Classificador de Nível de Herói

let heroiNOME = 'Antonio';
let heroiEXP = 9500;
let heroiLVL = '';

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/  

switch (true) {
  case heroiEXP <= 1000:
    heroiLVL = "Ferro";
    break;
  case heroiEXP>=1001 && heroiEXP<=2000:
    heroiLVL = "Bronze";
    break;
  case heroiEXP>=2001 && heroiEXP<=5000:
    heroiLVL = "Prata";
    break;
  case heroiEXP>=5001 && heroiEXP<=7000:
    heroiLVL = "Ouro";
    break;
  case heroiEXP>=7001 && heroiEXP<=8000:
    heroiLVL = "Platina";
    break;
  case heroiEXP>=8001 && heroiEXP<=9000:
    heroiLVL = "Ascendente";
    break;
  case heroiEXP>=9001 && heroiEXP<=10000:
    heroiLVL = "Imortal";
    break;
  case heroiEXP>=10001:
    heroiLVL = "Radiante";
    break;
}

console.log(`O Herói de nome **${heroiNOME}** está no nível de **${heroiLVL}**`);