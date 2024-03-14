# PalVsPokemon

## Introduction

This site was inspired by a video I saw from Disguised Toast where he tested if people could tell the difference.

## Running your own

This project has a docker compose file which you can use to launch your own version of the site.

Simply run `docker compose up -d` to launch a database that will then be set up and populated for you (Still work in progress)

## Developing

This project is built using SvelteKit.

Start with running `npm install` at the root of the project to set up the node dependencies.

Next you can run the site using:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

From here you can start making the changes you want and it will hot reload the website to display them as you go.

## Contributing

If you which to contribute people create a fork of the project and make your changes on there.
After you can then set up a pull request from your branch into the project and I'll check it over.

This project has some linting config so please stick to the formatting. If you need to break or change this please contact me first
This also go for the database schema set up, if you need to make changes please contact me. It will most likely be fine but I need to make sure it's not going to drag the project in the wrong direction

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

#### Credits

Painted Lady Font - https://www.fontspace.com/painted-lady-font-f19458
