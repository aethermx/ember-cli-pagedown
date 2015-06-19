#!/bin/bash

ember build --environment='production'

cd ../ember-cli-pagedown-gh-pages/

rm -r assets

cp -Rv ../ember-cli-pagedown/dist/* .

git add -A .

git commit -m 'automated update'

git push -u origin gh-pages

