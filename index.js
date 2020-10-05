const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'country', url: 'http://host.docker.internal:8080/query' },
        { name: 'language', url: 'http://host.docker.internal:4000/query' },
    ],
});

const server = new ApolloServer({
    gateway,
    subscriptions: false
});

const PORT = 5000;

server.listen(PORT).then(({ url }) => {
    console.log(`Server running at ${url}`);
});
