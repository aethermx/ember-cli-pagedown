#!/bin/bash

ember build --environment='production'

cp -Rv dist/* ../ember-cli-pagedown-gh-pages/


