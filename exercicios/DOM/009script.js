var letras = document.getElementById('letras')
var res = document.getElementById('res')
var lista = document.getElementById('select')
var vetor = []


function guardar()
{
    if (letras == 0)
    {
        window.alert('Por favor, coloque uma letra!')
    }

    else
    {
        vetor.push(letras.value)
        
        let item = document.createElement('option')
        item.text = `${letras.value} adicionado!`
        
        lista.appendChild(item)
        res.innerHTML = ''
    }

    letras.value = ''
    letras.focus()
}

function letraIsolada()
{
    for (let i = 0; i < vetor.length; i++)
    {
        if (vetor != vetor[i])
        {
            vetor = vetor[i]
        }
    }

    res.innerHTML = `${vetor[i]}`
}