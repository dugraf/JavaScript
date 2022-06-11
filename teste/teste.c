#include <stdio.h>
#include <stdlib.h>
#include <novouni.h>

BGL;
char escolha;
char comecar;
int inicio();
int regras();
int jogo();
void letraErrada();

int
main()

{
    inicio();
}

int
inicio()

{
    printf("Voces querem acessar as regras? (s/n)\n");
        scanf("%c", &escolha);
    
    BGL:
    if (escolha == 's')
    {
        regras();
    }

    else if (escolha == 'n')
    {
        jogo();
    }

    else
    {
        letraErrada();
    }
}

int
regras()

{
    system("cls");
    printf("As regras sao as seguintes:\n\n");

    //REGRAS
    printf("Se os 2 apostarem uma moeda, os dois ganham 2 moedas;\n\n");
    printf("Se 1 colocar uma moeda, e o outro nao, quem apostou ganha 3 moedas;\n\n");
    printf("Se ninguem colocar, ambos perdem 2 moedas;\n\n");
    printf("Se os dois jogadores colocarem uma moedas, ambos ganharao duas moedas;\n\n");
    printf("Se ninguem colocar, ambos perdem duas moedas;\n\n\n");

    printf("Comecar jogo?");
        scanf("%c", comecar);

    if (comecar == 's')
    {
        jogo();
    }

    else if (comecar == 'n')
    {
        exit(1);
    }

    else
    {
        letraErrada();
    }
}

void
letraErrada()
{
    printf("Ops... Nao entendi, repita!");
    goto BGL;
}

int
jogo()

{
    sleep(3);
}