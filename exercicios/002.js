// Faça um programa que entre com cinco números e imprima o quadrado de cada número.
 
var numero = [5, 4, 2, 6, 1]
var numero1 = [12, 2, 30, 7, 9, 0, 8, 23]
var quad = 0
 
function quadrado(n)
{
   for (var i = 0; i < n.length; i++)
   {
       n[i] **= 2
   }
 
   return n
}
 
console.log(quadrado(numero))
console.log(quadrado(numero1))