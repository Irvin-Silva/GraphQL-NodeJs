import { v4 as uuidv4 } from 'uuid';

const Mutation = {

    // Mutation to create user
    createUser: (parent, args, { db }, info) => {
       const isEmailTaken = db.users.some(user => user.email === args.email);
    if(isEmailTaken){
        throw new Error('Email is already taken');
    }
    const user = {
        id: uuidv4(),
        ...args
    }
    db.users.push(user);
    return user;
    },

    // Mutation to update user
    UpdateUser: (parent, args, {db}, info) => {
        const { id, ...data } = args;
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
    CreateAuthor: (parent, args, { db }, info) => {

        const author = {
            id: uuidv4(),
            ...args
        }
        db.authors.push(author);
        return author;
    },

    // Mutation to update author
    updateAuthor: (parent, args, { db }, info) => {
        const { id, ...data } = args;
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

}
export default Mutation;