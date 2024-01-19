let heroiVITORIAS = 90;
let heroiDERROTAS = 7;


function funcRANKsaldo(heroiVITORIAS,heroiDERROTAS) {    
    let rankSALDO = heroiVITORIAS - heroiDERROTAS;
	
    return rankSALDO
}


function funcHeroiLVL(rankSALDO_f) {

    let heroiLVL_f;

//if else ou case
    if ( rankSALDO_f <= 10 ) {
        heroiLVL_f = 'Ferro';
    
    } else if ( rankSALDO_f>=11 && rankSALDO_f<=20 ) {
        heroiLVL_f = 'Bronze';
    
    } else if ( rankSALDO_f>=21 && rankSALDO_f<=50 ) {
        heroiLVL_f = 'Prata';
    
    } else if ( rankSALDO_f>=51 && rankSALDO_f<=80 ) {
        heroiLVL_f = 'Ouro';
    
    } else if ( rankSALDO_f>=81 && rankSALDO_f<=90 ) {
        heroiLVL_f = 'Diamante';
    
    } else if ( rankSALDO_f>=91 && rankSALDO_f<=100 ) {
        heroiLVL_f = 'Lendário';
    
    } else if ( rankSALDO_f >= 101 ) {
        heroiLVL_f = 'Imortal';
    }

    return heroiLVL_f;
}




let heroiRANKsaldo = funcRANKsaldo(heroiVITORIAS,heroiDERROTAS);
let heroiLVL = funcHeroiLVL(heroiRANKsaldo);


console.log(`O Herói tem de saldo de ${heroiRANKsaldo} vitórias e está no nível de ${heroiLVL}`);