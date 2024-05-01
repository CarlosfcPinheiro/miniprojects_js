var images = document.getElementsByClassName('image');
var dots = document.getElementsByClassName('dot');
var index = 0;

show_Image(index)

function show_Image(i){
    index += i;

    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "dot");
    }

    if (index >= images.length){
        index = 0;
    }
    if (index < 0){
        index = images.length-1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";

    console.log(`index: ${index}`);
}