#!/bin/bash

if [ $# -eq 0 ]
	then
	echo "enter commitNo and filename"
	exit 0
fi


git checkout $1~1 $2
