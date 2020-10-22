//Capitalization

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}



////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById('get-btn');

///////create callback function thats used when button clicked////////
const getData = () =>{
    var answer = document.getElementById('pName').value;
    console.log(answer);
    var tops ="https://pokeapi.co/api/v2/type/" + answer;
    sendHttpRequest('GET', tops);
    if(answer == "normal" || answer == "1"){
    document.getElementById('typeImg').src = "types/Normal.png";
    }
    else if(answer == "fighting" || answer == "2"){
        document.getElementById('typeImg').src = "types/Fighting.png";
    }
    else if(answer == "flying" || answer == "3"){
        document.getElementById('typeImg').src = "types/Flying.png";
    }
    else if(answer == "poison" || answer == "4"){
        document.getElementById('typeImg').src = "types/Poison.png";
    }
    else if(answer == "ground" || answer == "5"){
        document.getElementById('typeImg').src = "types/Ground.png";
    }
    else if(answer == "rock" || answer == "6"){
        document.getElementById('typeImg').src = "types/Rock.png";
    }
    else if(answer == "bug" || answer == "7"){
        document.getElementById('typeImg').src = "types/Bug.png";
    }
    else if(answer == "ghost" || answer == "8"){
        document.getElementById('typeImg').src = "types/Ghost.png";
    }
    else if(answer == "steel" || answer == "9"){
        document.getElementById('typeImg').src = "types/Steel.png";
    }
    else if(answer == "fire" || answer == "10"){
        document.getElementById('typeImg').src = "types/Fire.png";
    }
    else if(answer == "water" || answer == "11"){
        document.getElementById('typeImg').src = "types/Water.png";
    }
    else if(answer == "grass" || answer == "12"){
        document.getElementById('typeImg').src = "types/Grass.png";
    }
    else if(answer == "electric" || answer == "13"){
        document.getElementById('typeImg').src = "types/Electric.png";
    }
    else if(answer == "psychic" || answer == "14"){
        document.getElementById('typeImg').src = "types/Psychic.png";
    }
    else if(answer == "ice" || answer == "15"){
        document.getElementById('typeImg').src = "types/Ice.png";
    }
    else if(answer == "Dragon" || answer == "16"){
        document.getElementById('typeImg').src = "types/Dragon.png";
    }
    else if(answer == "Dark" || answer == "17"){
        document.getElementById('typeImg').src = "types/Dark.png";
    }
    else if(answer == "fairy" || answer == "18"){
        document.getElementById('typeImg').src = "types/Fairy.png";
    }
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

        var str = "" + data.id
        var pad = "000"
        var ans = pad.substring(0, pad.length - str.length - str.length) + str

//////// Assign different parts to pokedex using dom selection/////////
document.getElementById('type_name').innerHTML = capitalize(data.name);
document.getElementById('type_gen').innerHTML = "Generation introduced: " + capitalize(data.generation.name);
document.getElementById('type_2xfrom').innerHTML = "2x Damage From: <br>"; // capitalize(data.damage_relations.double_damage_from[0].name);
for(var x = 0; x < data.damage_relations.double_damage_from.length; x++){
    document.getElementById('type_2xfrom').value += data.damage_relations.double_damage_from[x].name + "<br>";
}
}

    // or xhr.addeventlister('load',function)
    xhr.send();
    })

};


/// add event listener to get button ///

getBtn.addEventListener('click', getData);