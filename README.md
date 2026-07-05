# typescript-backend

Making a TS server that points to a mongodb , via API calls

Use this project to fork and use as a base for further development

Basic server that can be used to point to a database

- Node JS Runtime environment is needed to run application: Node version v22.7.0

- Framework : [Express](https://expressjs.com/en/)

### Commands

Build and run the server

```bash
npx tsc
node dist/server.js
```

Kill the port of the server

```bash
lsof -i :{PORT}
sudo kill {PORT}
```

Run the server the {PORT}, dynamic reload of server on change

```bash
npm run dev
```

## Build docker image

## Host on AWS ? -> need something free lol

## Cloud option : Databases

## Local Database : SQLite

SQLite supports the standard SQL language and provides a wide range of features, including transactions, triggers, and views. It is also ACID-compliant, ensuring data integrity even in the face of system failures.

One of the key advantages of SQLite is its small footprint. The entire database engine is contained in a single library file, making it easy to deploy and embed in applications. This makes SQLite a popular choice for mobile and embedded systems where resources are limited.

# Development Notes

### VS code extensions for development

Prettier:
[SonarQube for IDE](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

### Static code analysis - Sonarqube

[SonarQube Cloud](https://sonarcloud.io/organizations/beefbulgogi999/projects)
[Official SonarQube Docs](https://docs.sonarsource.com/sonarqube-cloud)
[Sonar Learning Center](https://learning.sonarsource.com/#/dashboard)

### Security code analysis - Owasp

<!-- [Owasp Scanner]()
[Owasp set up]() -->

### Useful Resources

[SQLite and Node](https://dev.to/simonmackie/a-comprehensive-guide-to-using-sqlite-with-nodejs-549i)
[Express server](https://medium.com/@ayobamieae/a-detailed-guide-on-how-to-set-up-a-simple-server-with-typescript-72c1594e5692)
