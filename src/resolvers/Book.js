const Book = {
    register_by: (parent, args, { db }, info) => {
        return db.users.find(user => user.id === parent.register_by);
    },
    writted_by: (parent, args, { db }, info) => {
        return db.authors.find(author => author.id === parent.writted_by);
    }
};

export default Book;