// Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
 
var id = [5, 24, 18, 2, 38]
var mai = id[0]
 
function verificar(n)
{
   for (var i = 0; i < n.length; i++)
   {
       if (n[i] > 18)
       {
           console.log(`${n[i]} anos eh de maior!`)
       }
  
       else
       {
           console.log(`${n[i]} anos eh de menor!`)
       }
   }
}
 
verificar(id)