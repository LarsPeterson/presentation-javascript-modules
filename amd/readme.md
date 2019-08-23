browserify -t deamdify scripts/main.js -o dist/bundle.js
./node_modules/.bin/http-server -a localhost -p 8000 -c-1