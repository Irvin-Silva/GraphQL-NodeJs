import { createSchema } from 'graphql-yoga';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from './resolvers';

const typeDefinitions = loadSchemaSync('src/schemas/schema.graphql', {
    loaders: [new GraphQLFileLoader()],
});

export const schema = createSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions],
});
