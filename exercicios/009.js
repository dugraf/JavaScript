/*Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:

let vetor = ["a", "b", "a", "a", "c", "b"]

Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, precisamos retornar este elemento.

No nosso exercício, faremos:
Criaremos uma variável que terá o nosso vetor ordenado de forma crescente;
Criaremos uma variável chamada odd, que receberá futuramente o valor isolado;
Percorreremos o vetor ordenado;
Armazenaremos em variáveis o elemento atual e o próximo elemento;
Se o elemento atual for igual ao próximo, seguimos a iteração;
Senão, a variável odd recebe o valor isolado.*/

var vetor = ['a', 'b', 'b', 'c', 'b', 'a', 'c', 'h']
vetor.sort()
var odd = vetor[0]
letraIsolada(vetor)

function letraIsolada(n)
{
    for (let i = 0; i < n.length; i++)
    {
        if (odd != n[i])
        {
            odd = n[i]
        }
    }
    console.log(`${odd}`)
}
