#!/usr/bin/env bash

rm -f gen.txt

# echo 'Generating uuid1 ids...'
# for i in {1..100}; do
#   node generate.js uuid1 100 >> gen.txt
# done

echo 'Generating uuid2 ids...'
for i in {1..100}; do
  node generate.js uuid2 100 >> gen.txt
done

# echo 'Generating uuid3 ids...'
# for i in {1..100}; do
#   node generate.js uuid3 100 >> gen.txt
# done

du -hs gen.txt

# echo 'Testing uuid1 for collisions...'
# node collide.js gen.txt uuid1

echo 'Testing uuid2 for collisions...'
node collide.js gen.txt uuid2

# echo 'Testing uuid3 for collisions...'
# node collide.js gen.txt uuid3