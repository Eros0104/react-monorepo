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

Install the dependencies:

```
npm install
```

Build the core project:

```
npm run build @mono/core
```

Choose a project to start:

```
# The same command is used to run any project
npm start <project-name>

# Starting the home app:
npm start @mono/home
```

### Useful commands

Building an app:

```
# The same command is used to build any project
npm run build <project-name>

# Building the home app:
npm run build @mono/home
```

Installing new packages to a project:

```
# Installing the package
npm install <package-name> -w <project-name>

# Example:
npm install react -w @mono/home
```

Watching an app:

```
# The same command is used to run any project
npm run watch <project-name>

# Watching the home app:
npm run watch @mono/home
```

## :test_tube: Tech stack

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://www.javascript.com/)
- [Rollup](https://rollupjs.org/)
