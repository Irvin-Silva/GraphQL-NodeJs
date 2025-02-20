import { v4 as uuidv4 } from 'uuid';

const Mutation = {
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
    }

}
export default Mutation;