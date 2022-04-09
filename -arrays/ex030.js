let amigo =
{
    nome: 'Jose',
    sexo: 'Homem',
    peso: 85.4,
    engordar(p = 0)
    {
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} eh ${amigo.sexo} pesa agora ${amigo.peso}kg`)