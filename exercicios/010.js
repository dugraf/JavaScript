/*Neste exercício, criaremos uma função que rotaciona o nosso vetor. Levaremos em consideração as letras do alfabeto, de A a E.

let vetorAlfabeto = ["A", "B", "C", "D", "E"];
O que queremos que aconteça é: rotacionar o vetor a quantidade de vezes indicada. Essa quantidade será representada pela letra Q.

Caso o valor apresentado por Q for 1, o array deverá rotacionar um elemento:

Para realizar esse exercício, você precisará:

Criar uma função rotacao(), que receberá dois parâmetros. O vetor e a quantidade (V, Q);
Adicione um índice para percorrer o vetor;
Caso o vetor passado por parâmetro for um vetor vazio, retorne um vetor vazio.*/

var vetor = ['A', 'B', 'C', 'D', 'E']
var ultimo = vetor[vetor.length - 1]
var q = 1

rotacao(vetor, q, ultimo)

function rotacao(n, m, o)
{
    if (n == 0 || m <= 0)
    {
        console.log(`Tanto o vetor quanto a rotacao devem ser maiores que zero!`)
    }

    else
    {
        for (i = 0; i < n.length; i++)
        {
            for (j = m; j <= n.length; j++)
            {
                o = n[0]
            }
        }
        console.log(`${n}`)
    }
}