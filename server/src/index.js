// server file for the backend
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// import typeDefs defined in schema.js
const { typeDefs } = require('./schema');

// function to start Apollo Server
const startServer = async () => {
    const server = new ApolloServer({ typeDefs });

    // start server and get its URL
    const { url } = await startStandaloneServer(server);

    console.log(`Server up and running at: ${url}`);
};

startServer();