import { v4 as uuidv4 } from 'uuid';

const Mutation = {

    // Mutation to create user
    createUser: (parent, {data}, { db }, info) => {
       const isEmailTaken = db.users.some(user => user.email === data.email);
    if(isEmailTaken){
        throw new Error('Email is already taken');
    }
    const user = {
        id: uuidv4(),
        ...data
    }
    db.users.push(user);
    return user;
    },

    // Mutation to update user
    UpdateUser: (parent, {id, data}, {db}, info) => {
        
        const userExist = db.users.find(user => user.id === id);

        if (!userExist) {
            throw new Error('User not found');
        }
        const isEmailTaken = db.users.some(user => user.email === data.email);
        if(isEmailTaken){
            throw new Error('Email is already taken');
        }

        db.users = db.users.map(user => {
            if(user.id === id){
                return {
                    ...user,
                    ...data
                }
            }
            return user;
        });
        return {...userExist, ...data};
    },

    // Mutation to create author
    CreateAuthor: (parent, {data}, { db }, info) => {

        const author = {
            id: uuidv4(),
            ...data
        }
        db.authors.push(author);
        return author;
    },

    // Mutation to update author
    updateAuthor: (parent, {id, data}, { db }, info) => {
        const authorExist = db.authors.find(author => author.id === id);

        if (!authorExist) {
            throw new Error('Author not found');
        }

        db.authors = db.authors.map(author => {
            if(author.id === id){
                return {
                    ...author,
                    ...data
                }
            }
            return author;
        });
        return {...authorExist, ...data};
    },
    //Mutation to create book
    createBook: (parent, {data}, { db }, info) => {
        
        const book = {
            id: uuidv4(),
            ...data
        }
        db.books.push(book);
        return book;
    },
    //Mutation to update book
    updateBook: (parent, {id, data}, { db }, info) => {
        const bookExist = db.books.find(book => book.id === id);

        if (!bookExist) {
            throw new Error('Book not found');
        }

        db.books = db.books.map(book => {
            if(book.id === id){
                return {
                    ...book,
                    ...data
                }
            }
            return book;
        });
        return {...bookExist, ...data};
    },
    //Mutation to delete user
    deleteBook: (parent, {id}, { db }, info) => {
        const bookExixt = db.books.find(book => book.id === id)
        if(!bookExixt){
            throw new Error('Book not found');
        }
        db.books = db.books.reduce((acc, book) => {
            if(book.id !== id){
                acc.push(book);
            }
            return acc
        }, [])
        return bookExixt;
    },
}
export default Mutation;