var res = document.getElementById('resultado')

function inserir(num)
{
    var numero = res.innerHTML
    res.innerHTML = numero + num
}

function limpar()
{
    res.innerHTML = ''
}

function voltar()
{
    let apagar = res.innerHTML
    res.innerHTML = apagar.substring(0, apagar.length -1)
}

function calcular()
{
    if (res.innerHTML)
    {
        res.innerHTML = eval(res.innerHTML)
    }
    else
    {
        res.innerHTML = 'Nada para calcular!'
    }
}