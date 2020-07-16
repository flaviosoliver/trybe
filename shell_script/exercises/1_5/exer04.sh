#!/bin/bash
#questao5
read -p "Digite o path(caminho) do arquivo ou diretório:" patch

if [ -f "$patch" ]
    then
        echo "Arquivo!"
elif [ -d "$patch" ]
    then
        echo "Diretório!"
else
        echo "Endereço Nulo!"
fi
ls -l