# :chains: Monorepo project

This project is an example of a React Monorepo, using npm workspaces.

## :computer: Getting started

First, you will need to install the following tools:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- A code editor, like [VSCode](https://code.visualstudio.com/)

Clone the project:

```bash
  git clone https://github.com/Eros0104/react-monorepo.git
  cd react-monorepo
```

Build the core project:

```
npm run build-core
```

Install the dependencies:

```
npm install
```

Choose a project to start:

```
# The same command is used to run any project
npm run watch <project-name>

# Starting the home app:
npm run watch @mono/home
```

### Useful commands

Building the apps:

```
# The same command is used to build any project
npm run build <project-name>

# Building the home app:
npm run build @mono/home
```

## :test_tube: Tech stack

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://www.javascript.com/)
- [Rollup](https://rollupjs.org/)
