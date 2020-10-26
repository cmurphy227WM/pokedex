//Capitalization

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}



////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementById('pName').value;
    console.log(answer);
    var tops ="https://pokeapi.co/api/v2/pokemon/" + answer;
    sendHttpRequest('GET', tops);
};
////////// Create callback function with embeded promise/////////////
const sendHttpRequest = (method,url) =>{
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
///////////// When browser load parse http req to usable format//////////
        const data = JSON.parse(xhr.response);//converts JSON data to RAW JS Objs & dataTypes
        console.log(data);//JSON Data

        document.getElementById('pokedex_screen').src = data.sprites.front_default;
        var str = "" + data.id
        var pad = "000"
        var ans = pad.substring(0, pad.length - str.length - str.length) + str

//////// Assign diferent parts to pokedex using dom selection/////////
        document.getElementById('info_id').innerHTML = "Pokedex Number: #" + ans;
        document.getElementById('info_stats').innerHTML = "Type: " + capitalize(data.types[0].type.name);
        document.getElementById('info_name').innerHTML = capitalize(data.name);
        document.getElementById('pokedex_screen_shiny').src = data.sprites.front_shiny;
        document.getElementById('info_abilities').innerHTML = "Ability: " + capitalize(data.abilities[0].ability.name);
        if (data.abilities[1].ability.is_hidden = true) {
            document.getElementById('info_abilities').innerHTML = "Ability: " + capitalize(data.abilities[0].ability.name) + "<br><br>Hidden Ability: " + capitalize(data.abilities[1].ability.name);
        } else if (data.abilities[2].ability.is_hidden = true) {
            document.getElementById('info_abilities').innerHTML = "Abilities: " + capitalize(data.abilities[0].ability.name) + " & " + capitalize(data.abilities[1].ability.name) + "<br><br>Hidden Ability: " + capitalize(data.abilities[2].ability.name);
        }

        if (data.abilities[2].ability.is_hidden = true) {
            document.getElementById('info_abilities').innerHTML = "Abilities: " + capitalize(data.abilities[0].ability.name) + " & " + capitalize(data.abilities[1].ability.name) + "<br><br>Hidden Ability: " + capitalize(data.abilities[2].ability.name);
        } else if (data.abilities[1].ability.is_hidden = true) {
            document.getElementById('info_abilities').innerHTML = "Ability: " + capitalize(data.abilities[0].ability.name) + "<br><br>Hidden Ability: " + capitalize(data.abilities[1].ability.name);
        }
    }

    // or xhr.addeventlister('load',function)
    xhr.send();
    })

};


/// add event listener to get button ///

getBtn.addEventListener('click', getData);


