# jsrocket

Orbital flight simulator in javascript

The goal is to evolve the features and code. But keep the application simple enough to allow playing not only with the piloting, but also with the modelling and rendering.

There is a secondary goal to explore fundamentals of javascript, that's why the no use of 3rd party packages in the code itself, and some development tools like transpiling and testing.

## Status

The current version is a working protype. Just read the Help instructions.

Most of the current evolution is being made basically in the rendering and breaking down the code in components.

Next features:

* Control panel with better speed references and instruments display
* Options to move the view center
* 'T' activating a trail of the recent trajectory

## Getting Started

Running in an existent server:

1. Open [http://www.plinioprado.com/prj/jsrocket] with Chrome or a compatible browser.
2. Read help.html, available in the 'help' menu option on the top left corner.

Running locally

1. Pull to a folder in your computer.
2. run "$ npm install"
3. Run local server with "$ npm run start".
4. Open [http://localhost:9000/] with Chrome or compatible browser.
5. Read help.html, available in the 'help' menu option on the top left corner.

Source maps available on Chrome Sources in webpack/./src

## Stack

Stack

* Javascript
* HTML5
* CSS3 (avoided in the canvas in favor of js dynamic styling)

Dev dependencies

* webpack: bundling
* webpack dev server: run locally
* babel and babel loader: Transpilling

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
