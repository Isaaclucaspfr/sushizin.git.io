function sim() {
    alert("Querida Mãe,Quero expressar minha imensa gratidão pela escolha maravilhosa que você fez ao pedir sushi para nós. Sua consideração em trazer para casa uma refeição tão deliciosa não apenas encheu nossos estômagos, mas também aqueceu nossos corações. Cada pedaço de sushi foi uma explosão de sabores e uma pausa bem - vinda na rotina diária. Sua atenção aos detalhes e o pensamento por trás dessa escolha não passaram despercebidos, e quero que saiba o quanto isso significa para mim. Agradeço por fazer este momento especial e por tornar o jantar não apenas uma refeição, mas uma experiência compartilhada de alegria e apreciação. Sua generosidade e amor sempre iluminam os nossos dias, e hoje não foi exceção. Espero ansiosamente por mais momentos como este, compartilhando não apenas boa comida, mas também o calor da nossa companhia. Obrigado, mãe, por ser tão incrível e por tornar até as escolhas alimentares simples em momentos memoráveis. Com todo o meu amor,Isaac")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(0, 100);
    btn.style.left = geraPosicao(0, 100);
    console.log("opa, desviei.....")
}

randomNumber(0, 100);

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}