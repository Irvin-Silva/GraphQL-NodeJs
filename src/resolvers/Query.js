const Query = {


    hello: (parent, args, ctx, info) => {
        const { name } = args;

        return `Hello ${name || 'World!'}`;
    },
    quantity: () => 100,

    // Query to get all users or by id
    user: (parent, { id }, ctx, info) => {
        const { db } = ctx;

        if (!id) {
            return db.users;
        }

        return db.users.filter(user => user.id === id);
    },

    // Query to get all authors or by id
    author: (parent, { id }, { db }, info) => {
        // if id is not provided, return all authors
        if (!id) {
            return db.authors;
        }
        //return author by id provided in the argument 
        return db.authors.filter(author => author.id === id);
    },

    // Query to get all books or by id
    book: (parent, { id }, { db }, info) => {
        // if id is not provided, return all books
        if (!id) {
            return db.books;
        }
        //return book by id provided in the argument 
        return db.books.filter(book => book.id === id);
    }
    
};

export default Query;