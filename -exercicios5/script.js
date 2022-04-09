var numero = document.getElementById('numero')
var lista = document.getElementById('select')
let res = document.getElementById('res')
var vetor = []

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

function adicionar()
{
    if ((numero.value > 100 || numero.value <= 0) || inLista(numero.value, vetor))
    {
        window.alert(`IMPOSSIVEL COLOCAR O NUMERO ${numero.value}, POR FAVOR, TENTE NOVAMENTE!`)
    }

    else
    {
        vetor.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    }

    numero.value = '' // ESVAZIA A CAIXA
    numero.focus() // FOCA NA CAIXA
}

function finalizar()
{
    if (vetor.length == 0)
    {
        window.alert('Adicione valores antes de finalizar, por favor!')
    }

    else
    {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${vetor.length}</strong> numeros cadastrados!</p>`

        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0
        var media = 0

        for (let i = 0; i < vetor.length; i++)
        {
            if (vetor[i] > maior)
            {
                maior = vetor[i]
            }

            if (vetor[i] < menor)
            {
                menor = vetor[i]
            }

            soma += vetor[i]
            media = vetor[i] / vetor.length
        }

        res.innerHTML += `<p>O maior numero eh <strong>${maior}</strong>!</p>`
        res.innerHTML += `<p>O menor numero eh <strong>${menor}</strong>!</p>`
        res.innerHTML += `<p>A soma dos numeros eh <strong>${soma}</strong>!</p>`
        res.innerHTML += `<p>A media dos numeros eh <strong>${media.toFixed(1)}</strong>!</p>`
    }
}