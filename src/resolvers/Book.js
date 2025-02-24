import { getUserId } from "../utils";

const Book = {

    
    register_by: (parent, args, { request, prisma }, info) => {

        const userId = getUserId(request);
        return prisma.books.findUnique({
            where: {
                id: parent.id
            }
        }).users()


    },
    writted_by: (parent, args, { request, prisma }, info) => {
        const userId = getUserId(request);
        return prisma.books.findUnique({
            where: {
                id: parent.id
            }
        }).authors()
    },
    
};

export default Book;