const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,   // Entrada do terminal
  output: process.stdout  // Saída no terminal
});

let level = "";

rl.question('Por favor, insira o nome do herói: ', (heroName) => {
    rl.question('Agora, insira a quantidade de XP: ', (xp) => {

switch (true) {
    case (xp <= 1000) : level = "Ferro"; break; 
    case (xp >= 1001 && xp <=2000) : level = "Bronze"; break; 
    case ((xp >= 2001) && (xp <=5000)) : level = "Prata"; break; 
    case ((xp >= 5001) && (xp <=7000)) : level = "Ouro"; break; 
    case ((xp >= 7001) && (xp <=8000)) : level = "Platina"; break; 
    case ((xp >= 8001) && (xp <=9000)) : level = "Ascendente"; break; 
    case ((xp >= 9001) && (xp <=10000)) : level = "Imortal"; break; 
    case (xp >= 10001) : level = "Radiante"; break; 
}

console.log(`O nível do herói de nome ${heroName} é de ${xp}, se classificando como ` + level )

rl.close();
    });
  });


 
