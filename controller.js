//Last Updated: 3/29/2022
//Created By: Kyle Stetz
//Description: First Revature Project Fetch Javascript
//set up event listener
document.querySelector("#fetchPokemon").addEventListener("click", getPokemonAPI);

//get infomation from the API
async function getPokemonAPI(event){
    let pokemonName = document.querySelector("input[type=text]").value;//input box
    try {
        validateName(pokemonName)
    } catch (error) {
        return;
    }
    const getPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);//await a response from API
    const getPokemonResponse = await getPokemon.json();//make the info I get from the api useable.
    let img = document.querySelector("#pokemonImage");//get the id for the image
    img.src = getPokemonResponse.sprites.other.dream_world.front_default;//set the source and the alt text
    img.alt = "Front image for " + getPokemonResponse.name;
    img.style.display = "inline-block";
    //get the height and weight for the pokemon
    let pokemonHeight = getPokemonResponse.height;
    let pokemonWeight = getPokemonResponse.weight;
    document.querySelector("#heightWeight").innerText = getPokemonResponse.name + " has a height of " + formatNumbers(pokemonHeight) + "m and weighs " + formatNumbers(pokemonWeight) + "kg";
}
//to format the height and weight of the numbers
function formatNumbers(num){
    let number = num.toString();
    if (number.toString().length == 1){
        number = number.toString().replace(/(\1+)(\d{1})/,'$1'+'.' +'$2');//Not sure what this means but it works

    }
    else{
        number = number.toString().replace(/(\d+)(\d{1})/,'$1' + '.' +'$2');
    }
    
    return number;
}
function validateName(name){
    if (!name) throw new Error("Please input a valid pokemon name!");
    if (name == " ") throw new Error("Please input a valid pokemon name!")

}