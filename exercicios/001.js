// Calcule a média de diversas notas digitadas pelo usuário.
 
var notas = [5, 9, 7, 8.5, 6]
var notas1 = [4, 5.7, 8.9, 10, 2.3, 7.8, 9.5]
 
function media(n)
{
   var soma = 0
 
   for (i = 0; i < n.length; i++)
   {
       soma += n[i]
   }
 
   n = soma / n.length
   return n.toFixed(1)
}
 
console.log(`${media(notas)}`)
console.log(`${media(notas1)}`)