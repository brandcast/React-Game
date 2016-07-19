

# Brandcast React Hackathon

Prompt:
 - Make a game with React that uses animations (e.g. React motion)
 - Time is short; try not to bite off more than you can chew
 - Some React game examples:
    - 24 hours of work: https://github.com/stevenhauser/i-have-to-return-some-videotapes
    - 2 hours of work: https://github.com/bbstilson/react-dodgy-game 
    - https://github.com/tomocchino/react-snake
 - Options:
    - start from scratch with some simple boiler plate
    - fork an existing React Game and make it __unrecognizably__ better (not just a PR)
 - Components of a game:
    - event loop to render planned events over time (enemies approaching etc)
    - collisions
    - scores
    - keyboard or mouse interactions

Time limit: open (by Friday).
Prize: be featured with your game on our Brandcast blog, and get some Brandcast swag.
Submissions: conor@brandcast.com subject: Brandcast Hackathon.

--------------------------------------------------------------------
Node 6 

# react-boilerplate - Boilerplate for "SurviveJS - React"

See [SurviveJS - React](http://survivejs.com/react/introduction/) for the book.

## Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run development build. If it doesn't start, make sure you aren't running anything else in the same port. In case you are on a Unix platform, you can try `PORT=3000 npm start`. It will pick up the port from the environment if it's set.
3. Surf to the port shown at terminal.
4. Start modifying the code. The browser should pick up the changes.

## Advanced Commands

Beyond development, the boilerplate supports other tasks listed below:

* `npm run build` - Generates a production build below `build/`. See the [Building with Webpack](http://survivejs.com/webpack/building-with-webpack/) part for more.
* `npm run deploy` - Deploys the contents of the `build/` directory below the **gh-pages** branch.
* `npm run test` - Runs `tests/` through Karma/Phantom/Mocha once.
* `npm run test:tdd` - Runs `tests/` in a TDD mode (watches for changes and rebuilds).
* `npm run test:lint` - Runs code through ESLint to spot code quality issues.
* `npm run stats` - Generates Webpack build statistics. See the [Analyzing Build Statistics](http://survivejs.com/webpack/building-with-webpack/analyzing-build-statistics/) chapter.
