# jsrocket

Orbital flight simulator in javascript.

The goal is to evolve the features and code. But keep the application simple enough to allow playing not only with the piloting, but also with the modelling of the phisics involved.

There is a secondary goal to play with javascript coding, therefore the no use of 3rd party packages in the code itself, and some development tools.

## Status

The current version is a working protype. Just read the Help instructions.

Most of the current evolution is being made in better view centers and instruents.

The ship can land on the moon, ISS is only a refference and can't be docked in.

Work in progresss is focused in refining the code and improving the control panel.

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

Model data is stores either in the component object or in a central statr in the main app. Dedevelopment is defining the balance between these options. The data include the positions that are recalculated each loop iteraction cycle of 0.1s.

View is rendered in sgv code, created at app loading then updated each loop iteraction. The point of view is according to selected reference  (currently or Moon) and zoom (for example Earth in the center or Earth surface in the bottom).

Controlers are in component objects injected into the main app as dependencies.

The rendered objects are created when the app is initiated and updated on zoom change or each loop cycle of 0.1s.

There is a timer tracking of real game time and a time tracking that is accelerated by a 'Time speed' that can be set between 1 and 2K faster then normal.

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
