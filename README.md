# Clearpeaks Exercice

This project is an exercice provided by Cleapeaks to test programming habilities submited by Ramon Donadeu

It consists on a group of Acordions that on click will open the content for each of the containers.
Only one of the acordions can be open at the same time, so when an acordion is open, and another one is clicked, the first one closes.

## Technologies

Project is created with:

- HTML
- Sass
- VanillaJS
- Webkit
- JSDoc

## Setup

To run this project, intall it locally using npm:

```
$ npm i
```

#### Development

If you want to do changes in the code, you should run it in development mode using:

```
$ npm run start
```

#### Production

If you want to build the project for production:

```
$ npm run build
```

#### Docs

The documentation is alredy generated but in case you make changes you can build them again with:

```
$ npm run build
```

### Test

I've tried to do the testing using Jest, but I didn't get it.
I know which tests I would have run:

- Check if an acordion opens on click
- Check if the same acordion opens on click
- Check if an opern acordion closes when clicking another acordion
