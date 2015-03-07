#!/bin/bash

ember build --environment='production'

cp -Rv dist/* ../ember-cli-pagedown-gh-pages/

cd ../ember-cli-pagedown-gh-pages/

git add -u .

git commit -m 'update'

git push -u origin gh-pages

