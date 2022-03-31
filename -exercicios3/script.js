function verificar()
{
    var start = document.getElementById('txti')
    var end = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (start.value.lenght == 0 || end.value.lenght == 0 || pass.value.lenght == 0)
    {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO!] Dados nao preenchidos! Insira-os, por favor!')
    }
    else
    {
        res.innerHTML = 'Contando... <br>'

        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(pass.value)

        if (i < f) // CONTAGEM CRESCENTE
        {
            for (let c = i; c <= f; c += p)
            {
                res.innerHTML += `${c} &#x1F449`
            }   
        }

        else // CONTAGEM DECRESCENTE
        {
            for (let c = i; c >= f; c -= p)
            {
                res.innerHTML += '&#x1F3C1'
            }
        }
        res.innerHTML += '&#x1F3C1'
    }
}