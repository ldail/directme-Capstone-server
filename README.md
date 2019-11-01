# Directme

## Links
* **[Live App](https://directme-client.ldail.now.sh/)**

* [Client Repository](https://github.com/ldail/directme-Capstone)
* [Server repository](https://github.com/ldail/directme-Capstone-server)
* [Kanban / Project Board](https://github.com/ldail/CapstoneI/projects)

## About
Directme is a modern web directory. Users can find new websites and communities via hubs and tags. Hubs are nested categories that a user can move through until they find a topic of interest. Tags allow a user to search by keywords to find listings. Users can contribute listings with any number of imaginable tags. If the tags match a hub's nested link, the listing will be displayed there as well.

Future deployment will include:
* User accounts that can save hubs, listings, and tags in their favorites.
* Vote for the best listings in each hub.
* Sort and filter the hubs, listings, and tags.
* Become editors of a hub and currate the best links for others.
* and much, more. Check the [Kanban / Project Board](https://github.com/ldail/CapstoneI/projects) for a list of upcoming releases.

## Technology 
* Node 
* Express
* Postgres
* Mocha
* Chai
* Supertest
* Enzyme
* Jest

## Details

Each Component is housed within its own folder. I took the best effort to separate out reusable functions as needed.
The hierarchy for the client is as follows:

#### Server-side Application
1. migrations
1. seeds 
1. src
	1. router
		1. router-service --> // *all knex functions that connect the node server to the postgres database*
		1. router --> *the endpoints for the server that connect the API calls to the router-service*
	1. app --> // *the express application including all middleware and connects the router*
	1. config --> // *configuration data*
	1. server --> // *entry point for the application. Starts the server and knex database*
1. test

## Set up

Complete the following steps to start a version of this for yourself:

1. Clone this repository to your local machine `git clone https://github.com/ldail/directme-Capstone-server.git directme-server`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the environment variables. Set the DATABASE_URL to your postgres server, and change any API tokens if you need.
7. Edit the contents of the `package.json` if you'd like to change the name.`


## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.