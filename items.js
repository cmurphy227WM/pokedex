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
    var tops ="https://pokeapi.co/api/v2/item/" + answer;
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

        document.getElementById('pokedex_screen').src = data.sprites.default;
        var str = "" + data.id
        var pad = "000"
        var ans = pad.substring(0, pad.length - str.length - str.length) + str

//////// Assign diferent parts to pokedex using dom selection/////////
        document.getElementById('info_id').innerHTML = "Item ID: #" + ans;
        document.getElementById('info_name').innerHTML = capitalize(data.name);
        document.getElementById('info_effect').innerHTML = data.effect_entries[0].effect;
    }

    // or xhr.addeventlister('load',function)
    xhr.send();
    })

};


/// add event listener to get button ///

getBtn.addEventListener('click', getData);


