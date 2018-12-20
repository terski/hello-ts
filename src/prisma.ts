import { Prisma } from 'prisma-binding';

export const createPrisma = (): Prisma => {
    return new Prisma({
        debug: false,
        endpoint: process.env.PRISMA_ENDPOINT,
        secret: process.env.PRISMA_SECRET,
        typeDefs: 'src/generated/prisma.graphql',
    });
};
