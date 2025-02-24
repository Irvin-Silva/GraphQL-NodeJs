import { v4 as uuidv4 } from 'uuid';
import { generateToken, hashPassword, validatePassword} from '../utils';
import { Token } from 'graphql';


const Mutation = {

    // Mutation to create user
    signUp: async (parent, {data}, { prisma }, info) => {

       const password = await hashPassword(data.password);

       const user = await prisma.users.create({ 
              data: {
                ...data,
                password
              },
       })
       return{

        user,
        token: generateToken(user.id)


       } 
        
    },

    login: async (parent, {data}, { prisma }, info) => {

        const user = await prisma.users.findUnique({
            where: {
                email: data.email
            }
        });
        const isValid = await validatePassword(data.password, user.password);
        
        if(!isValid){
            throw new Error('Invalid password');
        }
        return {
            user,
            token: generateToken(user.id)
        }
    },

    // Mutation to update user
    UpdateUser: (parent, {id, data}, {prisma}, info) => {
        return prisma.users.update({
            where: {
                id
            },
            data
        });
        
    },


    // Mutation to create author
    CreateAuthor: async (parent, {data}, { prisma }, info) => {
        const {register_by, ...rest} = data;

        const newAuthor = await prisma.authors.create({
            data: {
                ...rest,
                users: {
                    connect: {
                        id: Number(register_by)
                    }
                }
            }
        });
        return newAuthor;
    },




    // Mutation to update author
    updateAuthor: async(parent, {id, data}, { prisma }, info) => {
        const {register_by, ...rest} = data;

        if (register_by) {
            rest.users = {
                connect: {
                    id: Number(register_by)
                }
            }
        }
        const authorUpdated = await prisma.authors.update({
            where: {
                id: Number(id)
            },
            data:{
                ...rest,
            }
        });
        return authorUpdated;
    },



    //Mutation to create book
    createBook: async (parent, {data}, { prisma }, info) => {
       const{writted_by, register_by, ...rest} = data;
        const newBook = await prisma.books.create({
            data: {
                ...rest,
                authors: {
                    connect: {
                        id: Number(writted_by)
                    }
                },
                users: {
                    connect: {
                        id: Number(register_by)
                    }
                }
            }
        });
        return newBook;
    },


    //Mutation to update book
    updateBook: async (parent, {id, data}, { prisma }, info) => {
        const {writted_by, register_by , ...rest} = data;
        if(writted_by){
            rest.authors = {
                connect: {
                    id: Number(writted_by)
                }
            }
        }
        if(register_by){
            rest.users = {
                connect: {
                    id: Number(register_by)
                }
            }
        }
        const bookUpdated = await prisma.books.update({
            where: {
                id: Number(id)
            },
            data: {
                ...rest
            }
        });
        return bookUpdated;
    },

    //Mutation to delete user
    deleteBook: async(parent, {id}, { prisma }, info) => {
        
        const bookDeleted = await prisma.books.delete({
            where: {
                id: Number(id)
            }
        });
        return bookDeleted;
    },
}
export default Mutation;