let number_count = 0;

let count_el = document.getElementById("count");
count_el.innerHTML = number_count;

function change_Count(num){
    number_count += num;
    count_el.innerHTML = number_count;
}