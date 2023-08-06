function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERROR] tá errado essa merda')
    } else {
        var fsex = document.getElemetsByName('radsex')
        var idade = ano - fano.value    
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //menino
                img.setAttribute('src', 'bebe.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'guy.jpg')
            } else if (idade < 50) {
                //
                img.setAttribute('src', 'patric bate.png')
            } else {
                //idoso
                img.setAttribute('src', 'walter.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //menino
                img.setAttribute('src','chikita.png')
            } else if (idade <= 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `ALERTA DE ${genero} com ${idade} anos`
        res.appendChild(img)
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