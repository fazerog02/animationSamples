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
        square.style.transition = "opacity 1000ms 2500ms ease";
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
        let probability = [
            [20, 40, 60, 80, 80],
            [19, 39, 59, 79, 76],
            [18, 38, 59, 79, 72],
            [17, 37, 59, 79, 68],
            [16, 36, 59, 79, 64],
            [15, 35, 59, 79, 60],
            [14, 34, 59, 79, 56],
            [13, 33, 59, 79, 52],
            [12, 32, 59, 79, 48],
            [11, 31, 59, 79, 44],
            [10, 30, 59, 79, 40],
            [9, 29, 59, 79, 36],
            [8, 28, 59, 79, 32],
            [7, 27, 59, 79, 28],
            [6, 26, 59, 79, 24],
            [5, 25, 59, 79, 20],
            [4, 24, 59, 79, 16],
            [3, 23, 59, 79, 12],
            [2, 22, 59, 79, 8],
            [1, 21, 59, 79, 4],
            [0, 20, 40, 60, 0]
        ];
        if(random_number >= 1 && random_number < probability[set_random_counter][0]){
            color_type = 1;
        } else if(random_number >= 20 && random_number < probability[set_random_counter][1]){
            color_type = 2;
        } else if(random_number >= 40 && random_number < probability[set_random_counter][2]){
            color_type = 3;
        } else if(random_number >= 60 && random_number < probability[set_random_counter][3]){
            color_type = 4;
        } else if(random_number >= probability[set_random_counter][4] && random_number <= 100){
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
    if(set_random_counter > 25){
        clearInterval(set_random_color_interval);
        clear_square_interval = setInterval(clearSquare, 3000)
    }
}

let clearDone = false;
function clearSquare(){
    if(clearDone) {
        clearInterval(clear_square_interval);
        return;
    }
    document.body.removeChild(document.getElementById("load_animation_area"));
    clearDone = true;
}

function Transparent(square_list){
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        square_list[i].style.opacity = "0";
    }
}

let set_random_color_interval, clear_square_interval;
let set_random_counter = 0;
window.onload = function(){
    let square_list = [];
    for(let i = 0; i < NUMBER_OF_SQUARE; i++){
        square_list.push(document.getElementById("square"+i));
    }
    set_random_color_interval = setInterval(setRandomColor, 100, square_list);
    Transparent(square_list);
};