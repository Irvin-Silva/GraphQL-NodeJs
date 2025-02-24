import { getUserId } from "../utils";

const Query = {
    hello: (parent, args, ctx, info) => {
        const { name } = args;
        return `Hello ${name || 'World!'}`;
    },
    quantity: () => 100,

    // Query to get all users or by id
    user: (parent, { id }, { request, prisma }, info) => {
        const userId = getUserId(request);
        if (!id) {
            return prisma.users.findMany();
        }
        return prisma.users.findUnique({
            where: {
                id,
            }
        });
    },

    // Query to get all authors or by id
    author: (parent, { id, take, skip, orderBy }, { request, prisma }, info) => {
        const userId = getUserId(request);
        // If id is not provided, return all authors.
        if (!id) {
            return prisma.authors.findMany({
                take,
                skip,
                orderBy
            });
        }
        // Return author by id provided in the argument.
        return prisma.authors.findUnique({
            where: {
                id,
            }
        });
    },

    // Query to get all books or by id
    book: (parent, { id, take, skip, orderBy }, { request, prisma }, info) => {
        const userId = getUserId(request);
        // if id is not provided, return all books
        if (!id) {
            return prisma.books.findMany({
                take,
                skip,
                orderBy
            });
        }
        //return book by id provided in the argument 
        return prisma.books.findUnique({
            where: {
                id,
            }
        });
    }
};

export default Query;