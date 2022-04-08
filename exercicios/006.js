// Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
 
var nomes = ['Geraldo', 'Milena', 'Ana', 'Maria', 'Eduardo']
 
inv(nomes)
 
function inv(n)
{
   for (var i = n.length - 1; i >= 0; i--)
   {
       console.log(`${n[i]}`)
   }
}