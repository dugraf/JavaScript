function tabuada()
{
    var numero = document.getElementById('num')
    var res = document.getElementById('seltab')

    if (num.value.length == 0)
    {
        window.alert('[ERRO] Digite um numero, por favor!')
    }
    else
    {
        let num = Number(numero.value)
        res.innerHTML = ''
        
        for (var i = 0; i <= 10; i++)
        {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `res${i}`
            res.appendChild(item)
        }
    }
}


