I suggest to clone this project into Download folder. The following steps needs to open three terminal windows/taps.

1. In the project root directory, before running, pull the submodule (for local server), run `git submodule update --init --recursive`
2. Run local server: `cd Local-Server-Mockup && npm i && npm start`
3. Run project: open an 2nd terminal window and in the project root directory run `npm i && npm start`
4. Run test: open a 3rd terminal window and in the project root directory run `npm run test`
