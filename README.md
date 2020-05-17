# jsrocket

Orbital flight simulator in javascript.

The goal is to evolve the features and code. But keep the application simple enough to allow playing not only with the piloting, but also with the modelling.

There is a secondary goal to explore fundamentals of javascript, therefore the no use of 3rd party packages in the code itself, and some development tools.

## Status

The current version is a working protype. Just read the Help instructions.

Most of the current evolution is being made basically in the rendering and breaking down the code in components.

Next features:

* Control panel with better instruments.
* Options to move the view center.
* 'T' activating a trail of the recent trajectory

Moon and iss code is added, but in the current setup their moving and rendering are too heavy for looping every 0.1s. They will be revisited after Ship is moved to svg.

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

There are 2 modules for rendering: styled div (ship) and svg (other objects). Over time the ship will migrate to svg.

The rendered objects are created when the app is initiated and updated on certain events (like zoom change) or each loop cycle of 0.1s.

The position, speed and acceleration are handled in polar coordinates r (ray in m) and dec (declinaton in degrees).

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
