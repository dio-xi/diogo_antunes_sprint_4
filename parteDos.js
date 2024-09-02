//  Sprint #4 Parte Dos

const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];

// ### Challenge`getCharacterNameByIndex`

function getCharacterNameByIndex(array, index) {
    const jedi = array[index].name;
    return `«Name is ${jedi}»`;
}

// 1 Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter(character => character.mass > 100);

// 2 Obtener personajes con altura inferior a 200
const heightLessThan200 = characters.filter(character => character.height < 200);

// 6 Obtener todos los personajes masculinos

const maleGender = characters.filter(character => character.gender === 'male');

// 7 Obtener todos los personajes femeninos

const femaleGender = characters.filter(character => character.gender === 'female');


// 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.

let eyeColor = characters.filter(array => array.eye_color === 'blue')
let height = characters.filter(array => array.height >= '170')

if (eyeColor && height) {
    return console.log("true");
}
