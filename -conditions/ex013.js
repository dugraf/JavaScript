var agora = new Date()
var hora = agora.getHours()

console.log(`Agora sao exatamente ${hora} horas.`)

if (hora > 5 && hora <= 12)
{
    console.log('Bom dia!')
}

else if (hora > 12 && hora < 18)
{
    console.log('Boa Tarde!')
}

else if (hora > 0 && hora < 5)
{
    console.log('Boa madrugada!')
}

else if (hora >= 18 && hora <= 23)
{
    console.log('Boa noite!')
}

else
{
    console.log('Essa hora nao existe!')
}