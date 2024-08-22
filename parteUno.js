//### Challenge `sayGoodbye`

function sayGoodBye(name) {
    var name = prompt("¿Cómo te llamas?");
    return `Adiós, ${name}. ¡Que tengas un buen día!`;
}

//### Challenge `temperatureInC`

//Función usada para convertir Celsius to Farenheit
function temperatureInC(celsiusValue) {
    var celsiusValue = prompt("Temperatura en Celsius");
    return `La temperatura es ${(celsiusValue * (9 / 5)) + 32}ºF`;
}
temperatureInC();
//Función usada para convertir Farenheit to Celsius
function temperatureInF(farenheitValue) {
    var farenheitValue = prompt("Temperatura en Farenheit");
    return (farenheitValue - 32) * (5/9);
}
temperatureInF();

//### Challenge`makePersonObject`

function makePersonObject(id, name, email) {
    return `{
"id": "${id}",
"name": "${name}",
"email": "${email}"
}`
}
makePersonObject("1", "Diogo", "dio.antns@gmail.com");

//  ### Challenge `getName`

function getName(myName) {
    return `Hola, mi nombre es ${myName.name}.`;
}

let user = getName(
    {
        "id": "1",
        "name": "Diogo",
        "email": "dio.antns@gmail.com"
    }
);

