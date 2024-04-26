function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'BB HOMEM.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'JOVEM HOMEM.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'ADULTO HOMEM.png')
            } else {
                // Idoso
                img.setAttribute('src', 'IDOSO HOMEM.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'BB MULHER.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'JOVEM MULHER.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'ADULTA MULHER.png')
            } else {
                // Idosa
                img.setAttribute('src', 'IDOSA MULHER.png')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}