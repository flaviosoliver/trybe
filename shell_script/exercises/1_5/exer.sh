#!/bin/bash
##################questao1
#echo "Shell Script é demais!"
##################questao2
#MSG="Shell Script com variáveis é demais!"
#echo $MSG
##################questao3
#host=`whoami`
#echo "Este script está rodando no computador: $host"
##################questao4
#file="/home/flavio/aula_shell/aovivo/exe_dupla/exer.sh"
#
#if [ -e "$file" ]
#    then
#    echo "O caminho $file está habilitado!"
#fi
#
#if [ -w "$file" ]
#    then
#    echo "Você tem permissão para editar $file"
#else
#    echo "Você NÃO foi autorizado a editar $file"
#fi
##################questao5
#read -p "Digite o path(caminho) do arquivo ou diretório:" patch
#
#if [ -f "$patch" ]
#    then
#        echo "Arquivo!"
#elif [ -d "$patch" ]
#    then
#        echo "Diretório!"
#else
#        echo "Endereço Nulo!"
#fi
#ls -l
##################questao6
#FILE=$1
#
#if [ -f "$FILE" ]
#  then
#    echo "$FILE é um arquivo comum"
#elif [ -d "$FILE" ]
#  then
#    echo "$FILE é um diretório"
#else
#    echo "$FILE é alguma outra coisa"
#fi
#ls -l $FILE
##################questao7
#DIRECTORY=$1
#if [ -d "$DIRECTORY" ]
#  then
#    FILES=`ls -l $DIRECTORY | wc -l`
#    echo "O $DIRECTORY tem $FILES arquivos."
#else
#    echo "O argumento $DIRECTORY não é um diretório!"
#fi