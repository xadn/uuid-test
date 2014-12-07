#!/usr/bin/env bash
set -e

rm -f gen.txt

echo 'Generating uuid1 ids...'
for i in {1..500}; do
  node generate.js uuid1 100 >> gen.txt
done

echo 'Generating uuid2 ids...'
for i in {1..500}; do
  node generate.js uuid2 100 >> gen.txt
done

echo 'Generating uuid3 ids...'
for i in {1..500}; do
  node generate.js uuid3 100 >> gen.txt
done

du -hs gen.txt
echo ''

echo 'Testing uuid1 for collisions...'
for i in {1..3}; do
  node collide.js gen.txt uuid1
done
echo ''

echo 'Testing uuid2 for collisions...'
for i in {1..3}; do
  node collide.js gen.txt uuid2
done
echo ''

echo 'Testing uuid3 for collisions...'
for i in {1..3}; do
  node collide.js gen.txt uuid3
done
echo ''

