function carregar()
{
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var dia = window.document.getElementById('hora')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora == 1 || hora == 0)
    {
        msg.innerHTML = `Agora são ${hora} hora.`
    }

    if (hora >= 0 && hora < 12)
    {
        dia.innerText = 'Bom dia!'
        foto.src = 'img/manha.png'
        document.body.style.backgroundColor = '#BF8C60'
    }
    else if (hora >= 12 && hora < 18)
    {
        dia.innerText = 'Boa Tarde!'
        foto.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#F25C05'
    }
    else
    {
        dia.innerText = 'Boa Noite!'
        foto.src = 'img/noite.png'
        document.body.style.backgroundColor = '#463859'
    }
}