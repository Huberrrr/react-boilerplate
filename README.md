# MERN Boilerplate

## how to use
Click the "Use this template" button at the top and enter the repository name you want to use.

Once that is finished you also have to update the `name` and `author` fields in the `package.json` file.

You should also create the file `src/server/api/secrets.json` to store your secrets with the following format:
```
{
  "key": "value"
}
```

## npm scripts

`npm start:prod` use this for testing production builds

`npm run start:dev` use this for developing and testing changes

`npm run build:prod` use this create a production build before deploying
