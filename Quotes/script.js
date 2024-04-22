function initial_List(){
    let quotes = [["- Stephen Hawking", '"Vemos o universo na maneira como ele é, porque existimos."'], ["- Carl Sagan", '"O cosmos é tudo que existiu, existe e existirá."'], ["- F. Nietzsche", '"Pois o homem ainda preferirá o nada a nada querer."'], ["- A. Schopenhauer", '"Não bastaria, portanto, para conduzir o homem a um estado melhor, colocá-lo num mundo também melhor; seria necessário transformá-lo inteiramente, proceder de modo que deixasse de ser o que é, e se tornasse o que não é."'], ["- Marco Aurélio", '"O mundo é transformação e a vida ideias."'], ["- Byung-Chul Han", '"A espera começa quando não há mais nada aí pelo que se espere, nem mesmo pelo fim da própria espera. A espera ignora e destrói aquilo que espera. A espera não espera nada."'], ["- Martin Heidegger", '"O sendo-ser torna-se, de múltiplos modos, fenômeno."']];

    return quotes;
}
let quotes_list = initial_List();

let quote_el = document.getElementById("quote");
let author_el = document.getElementById("author");

function generate_Quote(){
    let randomNum = parseInt(Math.random()*(quotes_list.length - 1));

    let quote_random = quotes_list[randomNum][1];
    let author_random = quotes_list[randomNum][0];

    quote_el.innerHTML = quote_random;
    author_el.innerHTML = author_random;

    quotes_list.splice(randomNum, 1);
    if (quotes_list.length <= 0){
        quotes_list = initial_List();
    }

    console.log(randomNum);
    console.log(`length: ${quotes_list.length}`);
}