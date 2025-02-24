const Book = {
    register_by: (parent, args, { prisma }, info) => {
        return prisma.books.findUnique({
            where: {
                id: parent.id
            }
        }).users()


    },
    writted_by: (parent, args, { prisma }, info) => {
        return prisma.books.findUnique({
            where: {
                id: parent.id
            }
        }).authors()
    },
    
};

export default Book;