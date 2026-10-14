# CI/CD Intro Web App

The Express application for this project's testing and delivery exercises.
Maintained by [outhmanebelgasim](https://github.com/outhmanebelgasim).

## Setup

From this directory, with Node.js 16 or newer:

```bash
npm ci
# Run unit tests
npm test -- --runInBand
# Check JavaScript formatting without modifying files
npx --no-install standard
# Run the app
npm start
```

Open `http://localhost:3000`. Set `PORT` to use a different listening port.

The existing routes are `/`, `/ice-flakes`, and `/users/users`. See the
[project README](../README.md) for their responses and publishing instructions.

This application is derived from [Link-/ci-cd-intro](https://github.com/Link-/ci-cd-intro)
and distributed under the [MIT license](../LICENSE).
