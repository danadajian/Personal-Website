#!/bin/bash -e

git clone https://github.com/danadajian/danadajian.github.io.git
cd danadajian.github.io
cp -r ../build/. .

git config user.email $GIT_EMAIL
git config user.name $GIT_USERNAME
git add .
TIMESTAMP=$( date +"%Y-%m-%d_%H-%M-%S" )
git commit -m "Circle CI build ${TIMESTAMP}"
git push
