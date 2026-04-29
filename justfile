install:
  npm install

clean:
  rm -rf dist

build: install clean
  npm run build

publish: build
  npm publish --access public
