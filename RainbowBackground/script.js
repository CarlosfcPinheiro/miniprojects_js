//Projeto que consiste em um botão que, ao ser clicado, altera a cor do fundo da página, de maneira que as cores não sejam repetidas seguidamente.
let colors_array = ["#E1F0DA", "#D4E7C5", "#BFD8AF", "#99BC85", "#EFBC9B", "#FBF3D5", "#D6DAC8", "#9CAFAA", "#FFE6E6", "#E1AFD1", "#AD88C6", "#7469B6"];
let tag_body = document.getElementsByTagName('body')[0];
let number_elements = 11;

function change_Color(){
    if (colors_array.length <= 1){
        colors_array = ["#E1F0DA", "#D4E7C5", "#BFD8AF", "#99BC85", "#EFBC9B", "#FBF3D5", "#D6DAC8", "#9CAFAA", "#FFE6E6", "#E1AFD1", "#AD88C6", "#7469B6"];
    }
    else{
        if (number_elements <= 1){
            number_elements = 12;
        }
        else{
            number_elements -= 1;
        }

        random_color = parseInt(Math.random()*(number_elements)); //random_color is the index of an array's element
        tag_body.style.background = colors_array[random_color];
        console.log(`Current and deleted color from array: ${colors_array[random_color]}`);

        colors_array.splice(random_color, 1);

        console.log(`Lenght array: ${colors_array.length}`);
        console.log(`random index to delete: ${random_color}`);
        console.log(`complete array - deleted element: ${colors_array}`);
    }
}