function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('[ERRO] Tente novamente, por favor!')
    }
    
    else
    {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked)
        {
            genero = 'Homem'
            document.body.style.backgroundColor = 'lightblue'
            
            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'img/menino.png')
            }

            else if (idade >= 10 && idade < 18)
            {
                img.setAttribute('src', 'img/adolescenteH.png')
            }

            else if (idade > 18 && idade < 60)
            {
                img.setAttribute('src', 'img/homem.png')
            }

            else
            {
                img.setAttribute('src', 'img/idoso.png')
            }
        }

        else if (fsex[1].checked)
        {
            genero = 'Mulher'
            document.body.style.backgroundColor = 'lightpink'

            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'img/menina.png')
            }

            else if (idade >= 10 && idade < 18)
            {
                img.setAttribute('src', 'img/adolescenteM.png')
            }

            else if (idade > 18 && idade < 60)
            {
                img.setAttribute('src', 'img/mulher.png')
            }

            else
            {
                img.setAttribute('src', 'img/idosa.png')
            }
        }

        else
        {
            window.alert('Preencha todos os dados! Por favor!')
            return 0
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}