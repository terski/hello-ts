import { GraphQLServer } from 'graphql-yoga';
import { createPrisma } from './prisma';
import { Mutation } from './resolvers/mutation';
import { Query } from './resolvers/query';

export const createServer = (): GraphQLServer => {
    const prisma = createPrisma();
    return new GraphQLServer({
        context: req => ({ ...req, prisma }),
        resolverValidationOptions: { requireResolversForResolveType: false },
        resolvers: { Mutation, Query },
        typeDefs: 'src/schema.graphql',
    });
};
