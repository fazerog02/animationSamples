let NUMBER_OF_SQUARE = 2500;
let SQUARE_SIZE = 2;
let NUMBER_OF_SQUARE_ON_LINE = 50;

(function(){
    let square_list = [];
    let load_animation_area = document.createElement("div");
    load_animation_area.id = "load_animation_area";
    document.body.appendChild(load_animation_area);
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        let square = document.createElement("div");
        square.id = "square" + i;
        square.style.position = "absolute";
        square.style.top = SQUARE_SIZE*(parseInt(i/NUMBER_OF_SQUARE_ON_LINE)) + "vw";
        square.style.left = SQUARE_SIZE*(parseInt(i%NUMBER_OF_SQUARE_ON_LINE))  + "vw";
        square.style.width = SQUARE_SIZE+"vw";
        square.style.height = SQUARE_SIZE+"vw";
        square.style.backgroundColor = "white";
        square.style.transition = "opacity 500ms 2500ms ease";
        document.getElementById("load_animation_area").appendChild(square);
        square = document.getElementById("square"+i);
        square_list.push(square);
    }
})();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomColor(square_list){
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        let random_number = getRandomIntInclusive(1,100);
        let color_type;
        if(random_number >= (1-set_random_counter*4) && random_number < (20-set_random_counter*4)){
            color_type = 1;
        } else if(random_number >= (20-set_random_counter*4) && random_number < (40-set_random_counter*4)){
            color_type = 2;
        } else if(random_number >= (40-set_random_counter*4) && random_number < (60-set_random_counter*4)){
            color_type = 3;
        } else if(random_number >= (60-set_random_counter*4) && random_number < (80-set_random_counter*4)){
            color_type = 4;
        } else if(random_number >= (80-set_random_counter*4) && random_number <= 100){
            color_type = 5;
        }
        switch(color_type){
            case 1:
                square_list[i].style.backgroundColor = "#FFCC99";
                break;
            case 2:
                square_list[i].style.backgroundColor = "#FF9966";
                break;
            case 3:
                square_list[i].style.backgroundColor = "#FFCC66";
                break;
            case 4:
                square_list[i].style.backgroundColor = "#FFCC00";
                break;
            case 5:
                square_list[i].style.backgroundColor = "#FF9900";
                break;
        }
    }
    set_random_counter++;
    if(set_random_counter > 20){
        clearInterval(interval);
        interval = setInterval(clearSquare, 3000)
    }
}

let clearDone = false;
function clearSquare(){
    if(clearDone) clearInterval(interval);
    document.body.removeChild(document.getElementById("load_animation_area"));
    clearDone = true;
}

function Transparent(square_list){
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        square_list[i].style.opacity = "0";
    }
}

let interval, set_random_counter = 0;
window.onload = function(){
    let square_list = [];
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        square_list.push(document.getElementById("square"+i));
    }
    interval = setInterval(setRandomColor, 100, square_list);
    Transparent(square_list);
};