# Apollo Gateway
Gateway for federated GraphQL endpoints for quering languages and countries

## Dependencies
[Node.js](https://nodejs.org/en/)

## Running the application
##### Install dependencies
`npm i`

##### Run the server
`node index.js`

The service is running at port `5000`

It will look for GraphQL endpoints running at
* http://countries:8080/query
* http://languages:4000/query

These can be changed in `index.js`