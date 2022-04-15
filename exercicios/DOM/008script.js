var inicial = document.getElementById('inicial')
var final = document.getElementById('final')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var distancia = 0

function atravessaRua()
{

    if (passo.value <= 0)
    {
        res.innerHTML = 'Desculpe, a medida de distancia do passo deve ser positiva!'
    }

    else if (inicial.value > final.value)
    {
        res.innerHTML = 'Desculpe, mas o valor inicial deve ser menor que o valor final!'
    }

    else
    {
        for (let i = inicial.value; i < final.value; i++)
        {
            distancia = (final.value - inicial.value) / passo.value
        }
        
        res.innerHTML = `<p>Comecando a andar do ponto ${inicial.value}m ao ponto ${final.value}m com um passo de ${passo.value}m, voce precisara dar ${Math.ceil(distancia)} passos.</p>`
    }
}