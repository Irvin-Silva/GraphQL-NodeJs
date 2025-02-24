import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { PubSub } from 'graphql-subscriptions';
import { schema } from './schema';
import db from './db';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const pubsub = new PubSub();

const yoga = createYoga({
    schema,
    context: request => ({
        ...request,
        db,
        pubsub,
        prisma
    }),
    subscriptions: {
        // Asegúrate de configurar las suscripciones correctamente
        path: '/graphql', // Esta es la ruta para las suscripciones
    },
});

const server = createServer(yoga);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}/graphql`);
});
