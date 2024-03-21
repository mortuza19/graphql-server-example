import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from './resolver.js';
//server setup
const server = new ApolloServer({
    //typeDefs - type definition of data such as Game, Author etc.
    typeDefs,
    //resolvers
    resolvers
});
const url = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log('server is ready at url', url);
