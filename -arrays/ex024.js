let num = [5, 8, 2, 9, 3]

let a = 8
let pos = num.indexOf(a)

if (pos == -1)
{
    console.log('Valor nao encontrado')
}
else
{
    console.log(`O valor ${a} esta na posicao ${pos}`)
}