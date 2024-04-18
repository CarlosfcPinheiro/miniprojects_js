let hex_text = document.getElementById('hexcolor');
let tag_body = document.getElementsByTagName('body')[0];
hex_text.innerHTML = '#000000';

let letters_list = ['A', 'B', 'C', 'D', 'E', 'F'];
let letter_or_number; //1 = number, 2 = letter 

let i;
let hex_list = [];

function button_Clicked(){
    i = 0;
    hex_list = [];

    for (i; i != 6; i++){
        letter_or_number = parseInt(Math.random()*2 + 1);
        console.log(letter_or_number);

        if (letter_or_number == 1){
            let number = parseInt(Math.random()*9 + 1);

            hex_list.push(number);
        }
        else{
            let letter_index = parseInt(Math.random()*5 + 1);

            hex_list.push(letters_list[letter_index]);
        }
    }
    let code_hex = "#" + hex_list[0] + hex_list[1] + hex_list[2] + hex_list[3] + hex_list[4] + hex_list[5];

    tag_body.style.background = code_hex;
    hex_text.innerHTML = code_hex;

    console.log(tag_body);
    console.log(code_hex);
}