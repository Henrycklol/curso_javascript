function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    /* cria o get pra pegar a hora atual*/
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // mensagem de bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '$515154'
    }
}

/*
\n
\r
\t
\$
\'
\"
*/