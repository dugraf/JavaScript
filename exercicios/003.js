// Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.
 
var numero = [1, 23, 43, 2, 10, 100]
var mai = numero[0]
 
function maior(n)
{
   for (var i = 0; i < n.length; i++)
   {
       if(n[i] > mai)
       {
           mai = n[i]
       }
   }
 
   return mai
}
 
console.log(` O maior numero dessa array eh ${maior(numero)}`)