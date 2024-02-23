const gql = require('graphql-tag');

// defining type-defs
// these will contain the schema definitions
const typeDefs = gql`
    type Track {
        id: ID!
        title: String!
        author: Author!    # type Author
        thumbnail: String
        length: Int        # length in minutes
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    # defining Queries
    type Query {
        tracks: [Track!]!
    }
`;

// exports to be used in the server file
module.exports = {
    typeDefs
};