#!/bin/bash -e

git clone https://github.com/danadajian/danadajian.github.io.git
cd danadajian.github.io
cp -r ../build/. .

git remote set-url origin "https://$GIT_USERNAME:$GIT_PASSWORD@github.com/danadajian/danadajian.github.io.git"
git add .
TIMESTAMP=$( date +"%Y-%m-%d_%H-%M-%S" )
git commit -m "Circle CI build ${TIMESTAMP}"
git push
