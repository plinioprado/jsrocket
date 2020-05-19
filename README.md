# jsrocket

Orbital flight simulator in javascript.

The goal is to evolve the features and code. But keep the application simple enough to allow playing not only with the piloting, but also with the modelling.

There is a secondary goal to explore fundamentals of javascript, therefore the no use of 3rd party packages in the code itself, and some development tools.

## Status

The current version is a working protype. Just read the Help instructions.

Most of the current evolution is being made in better view centers and instruents.

ISS space station and moon are orbiting Earth. But only as references, docking or landing outside the base will require the moving view centers.

Next features:

* Control panel with better instruments.
* Options to move the view center.
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

## Approach

The data is stored in objects injected as dependencies into the app. As is the svg render and probably later other functionalities.

Rndering is based in svg. With certains point of views according to the zoom.

The rendered objectes are created when the app is initiated and updated on zoom change or each loop cycle of 0.1s.

The position, speed and acceleration are handled in polar coordinates r (ray in m) and dec (declinaton, or dec, in degrees).

Units are expressed in SI (International System of Units).

## Stack

Stack

* Javascript
* HTML5
* CSS3 (avoided in the canvas in favor of js dynamic styling)

Dev dependencies

* webpack: bundling
* webpack dev server: run locally
* babel and babel loader: Transpilling
* jest: unitesting

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
