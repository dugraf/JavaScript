var palavra = ['e', 'd', 'u', 'a', 'r', 'd', 'o']
var newstr = ''
 
for (var i = palavra.length - 1; i >= 0; i--)
{
   newstr += palavra[i]
}
 
console.log(`${newstr}`)