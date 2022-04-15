var num = document.getElementById('numeros')
var lista = document.getElementById('select')
var res = document.getElementById('res')
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

function tamanho(m)
{
    if (m.length > 4)
    {
        return true
    }

    else
    {
        false
    }
}

function tamanho_menor(m)
{
    if (m.length > 4)
    {
        return false
    }
    
    else
    {
        return true
    }
}

function armazenar()
{
    if (inLista(num.value, vetor))
    {
        window.alert(`Desculpe, mas o numero ${num.value} ja foi inserido! Por favor, coloque outro numero!`)
    }

    else if (tamanho(vetor))
    {
        window.alert(`Desculpe, mas soh sao aceitados 5 numeros!`)
    }

    else if (num.value == '')
    {
        window.alert(`Por favor, digite um numero`)
    }

    else
    {
        vetor.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `numero ${num.value} adicionado!`

        lista.appendChild(item)
        res.innerHTML = ''
    }

    num.value = ''
    num.focus()
}


function maior()
{
    if (tamanho_menor(vetor))
    {
        window.alert('Desculpe, mas sao necessarios 5 numeros!')
    }
    else
    {
        let maior = 0
    
        for (let i = 0; i < vetor.length; i++)
        {
            if (vetor[i] > maior)
            {
                maior = vetor[i]
            }
        }
    
        res.innerHTML = `O maior numero eh ${maior}`
    }
}