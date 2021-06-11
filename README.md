/*

    0 - Inicial

    I - criar div no html (id = container) - div que guardará todos quadrados  (flex-direction = row)

    II - div de colunas (7 colunas flex column-reverse) em js // colunas appendadas no container

    <div id=col>
        <div = quadrado>
        <div = quadrado>
        <div = quadrado>
    </div>

    III - div de quadrados (6 quadrados) - Criar o tabuleiro (estrutura) html (divs menores) - deve ser criado no js

    //quadrados appendados na coluna

    estilo de altura, largura e borda > para as divs menores


    1 - Exiba um disco preto ou vermelho.

    Criar uma div de disco (em js)

    classe disco (altura, largura, border-radius), preto (background), vermelho (background)


    HADLERS  DE CLICK

    criar função para ser executada no click

    Função {
        criar um disco (objeto html) > createElement
        adicionar um estilo de disco (classList.add) (previamente definido no css)

        condição de turno{
            adicionar um estilo de cor (classList.add) (previamente definido no css)
            adicionar dataset relacionado a cor
        }


        append do disco na coluna que foi clicada

        Coluna Clicada > event.currentTarget
    }


    Reveze os turnos! Mude a cor do próximo disco após um disco ser adicionado.

    let turno = 1

       Condição de turno{
        if(turno === 1){}
        if(turno === 2){}
    }


    3 - Registre a cor dos discos em cada posição do tabuleiro. Você deve ser capaz de fazer o debug via console.log() depois de cada movimento mostrando o estado do tabuleiro.

    Criar um array de (7) arrays

    Criar uma função para atualizar o array de arrays (a partir do dataset dos discos)


    ex: 1 === preto         2 === vermelho


    array{
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
        {1,2,1,1,1,2}
    }

    4- condição de permissão de jogada
    Após encher uma coluna (6 discos), não permita que mais discos sejam adicionados.
    array[i][5] !== undefined


    Verifique se o último disco adicionado completou uma linha de quatro peças na coluna (verticalmente).

    Função verifiçãoVertical{
        verificar a partir do array de arrays se há 4 números iguais consecutivamente para um mesmo índice
    }


    Verifique se o último disco adicionado completou uma linha de quatro peças horizontalmente.

    Função verifiçãoHorizontal{
        verificar a partir do array de arrays se há 4 números iguais consecutivamente para um mesmo array
    }

    Verifique se o último disco adicionado completou uma linha de quatro peças em uma diagonal descendente ou ascendente.

    Função verifiçãoDiagonal{
        XXXX
    }


*/


