/*Neste exercício, criaremos uma função que calcula a quantidade mínima de passos que uma pessoa precisa dar para atravessar a rua.

A nossa pessoa deseja atravessar a rua. Inicialmente, a pessoa está localizada em uma posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que a nossa pessoa dá, ela percorre uma distância fixa que denominaremos Z. Na nossa função, precisaremos:

Contar a quantidade mínima de passos que a nossa pessoa precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar a posição Y.
Em nossa função, precisamos passar os parâmetros. Por exemplo, daremos 3 números inteiros, X, Y e Z, e a função deverá retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.

Dando como exemplo os números de entrada:

X = 5;
Y = 40;
D = 1;
Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:

Ao dar um passo = 5 + 1;

Dois passos: 5 + 1 + 1.

E assim, sucessivamente, até chegar ou passar a distância final de 40.

Para realizar esse exercício, você precisará:

Criar uma função chamada atravessaRua;
Essa função deverá receber três parâmetros: X, Y e Z;
Calcular a distância necessária;*/

var inicial = 0 //metro
var final = 2100 //metros
var passo = 0.18 //metros
var distancia = 0

atravessaRua(inicial, final, passo)

function atravessaRua(x, y, z)
{
    if (z <= 0)
    {
        console.log(`Desculpe, a medida de distancia do passo deve ser positiva!`)
    }

    else
    {
        for (let i = x; i < y; i++)
        {
            distancia = (y - x) / z
        }
        
        console.log(`Comecando a andar do ponto ${x}m ao ponto ${y}m com um passo de ${z}m, voce precisara dar ${Math.ceil(distancia)} passos.`)
    }
}