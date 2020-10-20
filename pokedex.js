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
        document.getElementById('info_id').value = "Pokedex Number: #" + ans;
        document.getElementById('info_stats').value = data.types[0].type.name;
        document.getElementById('info_height').value = data.height+" ft";
        document.getElementById('info_weight').value = data.weight+' lbs';
        document.getElementById('info_moves').innerHTML = "Possible Moves:";
        document.getElementById('info_name').innerHTML = data.name;
        document.getElementById('pokedex_screen_shiny').src = data.sprites.front_shiny;
        for(var x=0; x < data.moves.length;x++)
        {
            document.getElementById('info_moves').value += data.moves[x].move.name+",";
        }
    }

    // or xhr.addeventlister('load',function)
    xhr.send();
    })

};


/// add event listener to get button ///

getBtn.addEventListener('click', getData);



