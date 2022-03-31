let num = [5, 8, 2, 9, 3]

/*for (let i = 0; i < num.length; i++)
{
    console.log(`A posicao ${i} tem valor ${num[i]}`)
}*/

for (let i in num) // PARA CADA VARIAVEL "I" NA VARIAVEL "NUM"
{
    console.log(`A posicao ${i} tem o valor ${num[i]}`)
}