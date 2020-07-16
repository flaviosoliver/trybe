#!/bin/bash
#questao4
file="/home/flavio/aula_shell/aovivo/exe_dupla/exer.sh"

if [ -e "$file" ]
    then
    echo "O caminho $file está habilitado!"
fi

if [ -w "$file" ]
    then
    echo "Você tem permissão para editar $file"
else
    echo "Você NÃO foi autorizado a editar $file"
fi