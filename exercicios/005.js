// Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
 
var id = [5, 24, 18, 2, 38]
var mai = id[0]
var maior = 0
var menor = 0
 
function verificar(n)
{
   for (var i = 0; i < n.length; i++)
   {
       if (n[i] > 18)
       {
           console.log(`${n[i]} anos eh de maior!`)
           maior += 1
       }
  
       else
       {
           console.log(`${n[i]} anos eh de menor!`)
           menor += 1
       }
    }
    
    console.log(`Existem ${maior} pessoas de maior idade, e ${menor} pessoas menor de idade!`)
}
 
verificar(id)