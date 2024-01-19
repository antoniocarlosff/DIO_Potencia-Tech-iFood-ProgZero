/*
## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
*/

//Construir Heroi
class clHeroi {

    constructor (HeroiNOME, HeroiIDADE, HeroiTIPO) {
        this.heroiNome = HeroiNOME;
        this.heroiIDADE = HeroiIDADE;
        this.heroiTIPO = HeroiTIPO;
    }

    //método para definir tipo de ataque
    ataqueTIPO() {

        var ataqueTIPO;

        switch (this.heroiTIPO) {
            case 'mago':
                ataqueTIPO = 'magia';
                break;

            case 'guerreiro':
                ataqueTIPO = 'espada';
                break;

            case 'monge':
                ataqueTIPO = 'artes marciais';
                break;

            case 'ninja':
                ataqueTIPO = 'shuriken';
                break;
        }

        return ataqueTIPO;
    }

    //método atacar
    moveATACAR() {
        var moveATAQUE = this.ataqueTIPO();
        console.log(`O ${this.heroiTIPO} atacou usando ${moveATAQUE}`);
    }
}

//Cria party
let prtHEROI1 = new clHeroi('Merlin',99,'mago');
let prtHEROI2 = new clHeroi('Conan',41,'guerreiro');
let prtHEROI3 = new clHeroi('JohnPaul',33,'monge');
let prtHEROI4 = new clHeroi('Gaiden',30,'ninja');

//Atacar
prtHEROI1.moveATACAR();
prtHEROI2.moveATACAR();
prtHEROI3.moveATACAR();
prtHEROI4.moveATACAR();