var num_media = document.getElementById('numeros_media')
var lista = document.getElementById('select')
var res = document.getElementById('res')
var vetor_notas = []


function inLista(n, m)
{
    if (m.indexOf(Number(n)) != -1)
    {
        return true
    }

    else
    {
        return false
    }
}


function armazenar()
{
    if ((num_media.value > 10) || (num_media.value <= 0))
    {
        window.alert(`Impossivel colocar o numero ${num_media.value}, pois nao esta entre 1 e 10, por favor, tente novamente!`)
    }

    else
    {
        vetor_notas.push(Number(num_media.value))

        let item = document.createElement('option')
        item.text = `${num_media.value}`

        lista.appendChild(item)
        res.innerHTML = ''
    }

    num_media.value = ''
    num_media.focus()
}

function media()
{
    if (vetor_notas.length == 0)
    {
        window.alert('Adicione valores antes de finalizar, por favor!')
    }

    else
    {
        res.innerHTML = ''
        let soma = 0
        
        for (let i = 0; i < vetor_notas.length; i++) 
        {
            soma += vetor_notas[i]
        }
        
        let media = soma / vetor_notas.length
        
        res.innerHTML += `<p> Temos ao todo ${vetor_notas.length} notas!</p>`
        res.innerHTML += `<p> A sua media eh ${media.toFixed(1)}</p>`
    }
}



var num_quadrado = document.getElementById('numeros_quadrado')
var lista1 = document.getElementById('select1')
var res1 = document.getElementById('res1')
var vetor_quadrado = []

function armazenar_quadrado()
{
    if ((num_quadrado.value > 100 || num_quadrado.value <= 0) || inLista(num_quadrado.value, vetor_quadrado))
    {
        window.alert(`Impossivel colocar o numero ${num_quadrado.value}, pois nao esta entre 1 e 100, por favor, tente novamente!`)
    }

    else
    {
        vetor_quadrado.push(Number(num_quadrado.value))

        let item_quadrado = document.createElement('option')
        item_quadrado.text = `${num_quadrado.value}`

        lista1.appendChild(item_quadrado)
        res1.innerHTML = ''
    }

    num_quadrado.value = ''
    num_quadrado.focus()
}

function quadrado()
{

    if (vetor_quadrado.length == 0)
    {
        window.alert('Adicione valores antes de finalizar, por favor!')
    }

    else
    {
        res1.innerHTML = ''
        let quad = 0

        for (let i = 0; i < vetor_quadrado.length; i++)
        {
            quad = vetor_quadrado[i] ** 2
            res1.innerHTML += `<p>${vetor_quadrado[i]}² é igual a <strong>${quad}</strong>.</p>`
        }

    }
}