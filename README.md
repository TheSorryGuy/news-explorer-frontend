# News Explorer

This is a part of my diploma project for Yandex.Praktirum
Project includes frontend and backend parts.
Most of all here is HTML/CSS and some JS, to open elements,
but also here is bundle-making option.

```sh
version: 0.0.1
author: Fedor Ganin 
github: https://github.com/TheSorryGuy/news-explorer-api
url: https://thesorryguy.github.io/news-explorer-frontend/
```
HTML dont need comments, i guess, but here is scripts u can run

# Make bundle
entry point for webpack is ```src/index.js```
output is ```dist``` folder in main directory
```sh
//console
npm run build
```

# Dev-server
opens new window with hot reload
```sh
//console
npm run dev
```

# Deploy 
pushes ```dist``` folder (must be builded at first) on gh-pages
```sh
//console
npm run deploy
```
